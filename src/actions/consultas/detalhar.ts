import { Request, Response } from 'express';
import { detalhar } from '../../services/consultas';

export default async (req: Request, resp: Response) => {
  const { id } = req.params;

  const consulta = await detalhar(id);

  if (!consulta) {
    return resp.status(404).json({
      code: 404,
      message: 'Consulta não encontrada',
    });
  }

  return resp.json(consulta);
};
