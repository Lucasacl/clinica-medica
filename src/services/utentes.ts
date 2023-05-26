import { PrismaClient, Paciente } from '@prisma/client';

export const prisma = new PrismaClient();

const adicionar = (
  name: string,
  age: number,
  gender: string,
  adress: string,
  contact: number
) =>
  prisma.paciente.create({
    data: {
      name,
      age,
      gender,
      adress,
      contact,
    },
  });

const atualizar = (id: string, patient: Paciente) =>
  prisma.paciente.update({
    where: { id },
    data: patient,
  });

const detalhar = (id: string) =>
  prisma.paciente.findFirst({
    where: {
      id,
      deleted: false,
    },
    include: {
      consult: true,
    },
  });

const listar = () =>
  prisma.paciente.findMany({
    where: {
      deleted: false,
    },
  });

const remover = (id: string) =>
  prisma.paciente.update({
    where: { id },
    data: {
      deleted: true,
    },
  });

export { listar, detalhar, adicionar, atualizar, remover };
