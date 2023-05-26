import { Request, Response } from 'express';
import { adicionar } from '../../services/utentes';

export default async (req: Request, resp: Response) => {
  const { name, age, gender, adress, contact } = req.body;

  const novoPaciente = await adicionar(name, age, gender, adress, contact);

  return resp.json(novoPaciente);
};
