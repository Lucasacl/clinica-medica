import { Request, Response } from 'express';
import { remover, detalhar } from '../../services/medicos';

export default async (req: Request, resp: Response) => {
  const { id } = req.params;

  if (!(await detalhar(id))) {
    return resp.status(404).json({
      code: 404,
      message: 'Medico não encontrado',
    });
  }

  await remover(id);
  return resp.json({
    message: 'Medico removido',
  });
};
