import { Request, Response } from 'express';
import { listar } from '../../services/medicos';

export default async (req: Request, resp: Response) => {
  resp.json(await listar());
};
