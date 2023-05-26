import { Request, Response } from 'express';
import { adicionar } from '../../services/consultas';

export default async (req: Request, resp: Response) => {
  const { room, description, medicId, patientId } = req.body;

  const novaConsulta = await adicionar(room, description, medicId, patientId);

  return resp.json(novaConsulta);
};
