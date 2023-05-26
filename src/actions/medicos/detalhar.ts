import { Request, Response } from 'express';
import { detalhar } from '../../services/medicos';

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const medico = await detalhar(id);

  if (!medico) {
    return response.status(404).json({
      code: 404,
      message: 'Medico não encontrado',
    });
  }

  return response.json(medico);
};
