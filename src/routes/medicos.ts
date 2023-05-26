import express from 'express';
import {
  listar,
  detalhar,
  adicionar,
  remover,
  atualizar,
} from '../actions/medicos';

const router = express.Router();

router.put('/:id', atualizar);
router.get('/:id', detalhar);
router.delete('/:id', remover);
router.get('', listar);
router.post('', adicionar);

export default router;
