import { PrismaClient, Consulta } from '@prisma/client';

export const prisma = new PrismaClient();

const adicionar = (
  room: string,
  description: string,
  medicId: string,
  patientId: string
) =>
  prisma.consulta.create({
    data: {
      room,
      description,
      medicId: medicId,
      patientId,
      deleted: false,
    },
  });

const atualizar = (id: string, consult: Consulta) =>
  prisma.consulta.update({
    where: { id },
    data: consult,
  });

const detalhar = (id: string) =>
  prisma.consulta.findFirst({
    where: {
      id,
      deleted: false,
    },
  });

const listar = () =>
  prisma.consulta.findMany({
    where: {
      deleted: false,
    },
  });

const remover = (id: string) =>
  prisma.consulta.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { listar, detalhar, adicionar, atualizar, remover };
