import { Request, Response } from 'express';
import { remover, detalhar } from '../../services/consultas';

export default async (req: Request, resp: Response) => {
  const { id } = req.params;

  if (!(await detalhar(id))) {
    return resp.status(404).json({
      code: 404,
      message: 'Consulta nãi encontrada',
    });
  }

  await remover(id);
  return resp.json({
    message: 'Consulta removida',
  });
};
