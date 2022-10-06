import { Router, Request, Response } from 'express'

export default (routerExemplo1: Router): void => {
    routerExemplo1.get('/exemplo1-get', (req: Request, res: Response) => {
        res.json({ tester: 'Rota Exemplo1'})
    })

    routerExemplo1.get('/exemplo1-get-test2', (req: Request, res: Response) => {
        res.json({ tester: 'Rota Exemplo1 get test2'})
    })
}