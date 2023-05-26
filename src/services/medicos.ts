import { PrismaClient, Medico } from '@prisma/client';

export const prisma = new PrismaClient();

const adicionar = (name: string, specialty: string) =>
  prisma.medico.create({
    data: {
      name,
      specialty,
    },
  });

const atualizar = (id: string, medic: Medico) =>
  prisma.medico.update({
    where: { id },
    data: medic,
  });

const detalhar = (id: string) =>
  prisma.medico.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const listar = () =>
  prisma.medico.findMany({
    where: {
      deleted: false,
    },
    include: {
      Consult: true,
    },
  });

const remover = (id: string) =>
  prisma.medico.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { listar, detalhar, adicionar, atualizar, remover };
