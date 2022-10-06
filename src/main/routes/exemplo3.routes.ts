import { Router, Request, Response } from 'express'

export default (routerExemplo3: Router): void => {
    routerExemplo3.get('/exemplo3-get', (req: Request, res: Response) => {
        res.json({ tester: 'Rota Exemplo3'})
    })
}