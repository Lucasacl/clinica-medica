import express, { Request, Response } from 'express';
import auth from './auth';
import utentes from './utentes';
import medicos from './medicos';
import consultas from './consultas';
import { name, version } from '../../package.json';

const router = express.Router();

router.get('/', (request: Request, response: Response) =>
  response.json({
    name,
    version,
  })
);

router.use('/utentes', utentes);
router.use('/consultas', consultas);
router.use('/medicos', medicos);
router.use('/auth', auth);

export default router;
