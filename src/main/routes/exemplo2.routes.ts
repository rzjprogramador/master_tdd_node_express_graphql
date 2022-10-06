import { Router, Request, Response } from 'express'

export default (routerExemplo2: Router): void => {
    routerExemplo2.get('/exemplo2-get', (req: Request, res: Response) => {
        res.json({ tester: 'Rota Exemplo2'})
    })
}