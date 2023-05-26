import { Request, Response } from 'express';
import { detalhar } from '../../services/utentes';

export default async (request: Request, response: Response) => {
  const { id } = request.params;

  const paciente = await detalhar(id);

  if (!paciente) {
    return response.status(404).json({
      code: 404,
      message: 'Paciente não encontrado',
    });
  }

  return response.json(paciente);
};
