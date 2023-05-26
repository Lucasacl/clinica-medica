import { PrismaClient, Usuario } from '@prisma/client';
import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';

const prisma = new PrismaClient();

export async function register(
  email: string,
  password: string,
  firstName: string,
  lastName?: string
) {
  const user = await prisma.usuario.create({
    data: {
      email,
      password: await bcrypt.hash(password, 8),
      profile: {
        create: {
          firstName,
          lastName,
        },
      },
    },
  });

  return createToken(user);
}

export const findById = async (id: string) =>
  prisma.usuario.findUnique({
    where: { id },
    include: { profile: true },
  });

export async function attemptLogin(email: string, password: string) {
  const user = await prisma.usuario.findFirst({
    where: {
      email,
      deleted: false,
    },
  });

  const match = user && (await bcrypt.compare(password, user.password));

  if (!user || !match) {
    throw new Error('Bad credentials');
  }

  return createToken(user);
}

function createToken(user: Usuario): string {
  const token = sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 180,
      email: user.email,
      user_id: user.id,
    },
    'SecretKey'
  );

  return token;
}
