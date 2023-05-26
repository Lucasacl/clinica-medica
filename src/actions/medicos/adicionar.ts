import { Request, Response } from 'express';
import { adicionar } from '../../services/medicos';

export default async (req: Request, resp: Response) => {
  const { name, specialty } = req.body;

  const novoMedico = await adicionar(name, specialty);

  return resp.json(novoMedico);
};
