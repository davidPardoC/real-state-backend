import { Request, Response, Router } from 'express';
import { AuthMiddleware } from '../Middlewares/AuthMiddlewares';
import { PropertyValidator } from './Validators/property.validator';

export const PropertyRouter = Router();

PropertyRouter.post(
  '',
  AuthMiddleware,
  PropertyValidator.createproperty,
  (req: Request, res: Response) => {},
);

PropertyRouter.post(
  '/types',
  AuthMiddleware,
  PropertyValidator.createPropertyType,
  (req: Request, res: Response) => {},
);

PropertyRouter.get('/types', (req: Request, res: Response) => {});

PropertyRouter.post(
  '/condition',
  AuthMiddleware,
  (req: Request, res: Response) => {},
);

PropertyRouter.get('/condition', (req: Request, res: Response) => {});
