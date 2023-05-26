import { Request, Response } from 'express';
import { atualizar, detalhar } from '../../services/medicos';

export default async (req: Request, resp: Response) => {
  const { id } = req.params;

  if (!(await detalhar(id))) {
    return resp.status(404).json({
      code: 404,
      message: 'Medico não encontrado',
    });
  }

  const medico = await atualizar(id, req.body);

  return resp.json(medico);
};
