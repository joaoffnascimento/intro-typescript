import { Request, Response } from 'express'
import createUser from './services/CreateUser'

export function helloWorld(req: Request, res: Response) {
    return res.json(createUser({
        name: 'João Felipe',
        email: 'thecurrentuser@live.com',
        password: '123456',
        techs: [
            'Java',
            'Spring',
            'Javascript',
            'Node.Js',
            { tech: 'Java', experience: 60 }
        ]
    }))
}