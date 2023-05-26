import express from 'express';
import {
  listar,
  detalhar,
  adicionar,
  remover,
  atualizar,
} from '../actions/utentes';

const router = express.Router();

router.put('/:id', atualizar);
router.post('', adicionar);
router.get('', listar);
router.delete('/:id', remover);
router.get('/:id', detalhar);

export default router;
