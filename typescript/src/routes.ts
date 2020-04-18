import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
    const user = createUser({
        email: 'oi@hotmail.com',
        password: '1234',
        techs: [
            'NodeJS',
            'typeScript',
            'ReactJS',
            { title: 'App', experience: 100 },
        ],
    });
    
    return response.json({ message: 'Hello World' });
};