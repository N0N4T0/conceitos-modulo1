import { Request, Response } from 'express';
import createUser from './services/CreateUser';

// Tipagens comuns ou primitivas: boolean, number, string, object, array
// Tipagem de conjunto de dados (principalmente objeto) = interface

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