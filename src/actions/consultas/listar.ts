import { Request, Response } from 'express';
import { listar } from '../../services/consultas';

export default async (req: Request, resp: Response) => {
  resp.json(await listar());
};
