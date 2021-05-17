import { Request, response, Response } from 'express';
import createUser from './services/CreateUser'

export default function routes(req: Request, res: Response){
    const user = createUser({
        name: 'Lucca',
        email: 'lucca@test.com',
        password: '123456',
        techs: ['React Native', 'ReactJS', 'Node.js', {title: 'Django Rest Framework', experience: 10}]
    });

    // return res.json({ message: 'Teste Teste' });

    return res.json(user);
}