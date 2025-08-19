import { Request, Response, NextFunction } from 'express';


export const login = (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('welcome to user');
        
        res.send({ mesage: 'Welcome' })
    } catch (error) {
        next(error);
    }
};


export const register = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send({ mesage: 'Welcome' })
    } catch (error) {
        next(error);
    }
};