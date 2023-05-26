import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { ExtendedPayload } from '../models/token';
import { findById } from '../services/auth';

const publicEndpoints = ['/auth/login', '/auth/register'];

export function verifyToken(req: Request, resp: Response, next: NextFunction) {
  if (publicEndpoints.includes(req.path)) {
    console.log('Public endpoint, skipping token verification.');
    return next();
  }

  const authHeader = req.headers.authorization;

  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    console.log('Token not found.');
    return resp.sendStatus(401).json({
      code: 401,
      message: 'Token not found',
    });
  }

  verify(token, 'SecretKey', async (error, payload) => {
    if (error) {
      console.log('Token verification failed:', error);
      return resp.status(403).json({
        code: 403,
        message: error.message,
      });
    }

    const { user_id: id } = payload as ExtendedPayload;

    req.user = await findById(id);

    next();
  });
}
