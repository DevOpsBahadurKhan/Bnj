import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    const token = await authService.login(email, password);
    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
