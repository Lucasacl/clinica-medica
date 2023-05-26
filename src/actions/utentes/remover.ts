import { Request, Response } from 'express';
import { remover, detalhar } from '../../services/utentes';

export default async (req: Request, resp: Response) => {
  const { id } = req.params;

  if (!(await detalhar(id))) {
    return resp.status(404).json({
      code: 404,
      message: 'Paciente não encontrado',
    });
  }

  await remover(id);
  return resp.json({
    message: 'Paciente removido',
  });
};
