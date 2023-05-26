import express from 'express';
import {
  adicionar,
  listar,
  atualizar,
  remover,
  detalhar,
} from '../actions/consultas';

const router = express.Router();

router.get('/:id', detalhar);
router.get('', listar);
router.delete('/:id', remover);
router.put('/:id', atualizar);
router.post('', adicionar);

export default router;
