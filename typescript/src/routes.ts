import { Request, Response } from 'express';
import createUser from './services/CreateUser';
export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'pjpc@ic.ufal.br',
    password: '123456',
    techs: [
      'NodeJS',
      'ReactJS',
      'React Native'
    ],
  });

  return response.json({ message: 'Hello World' });
}