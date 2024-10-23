import {Request, Response, NextFunction} from 'express'

export const primeirointermediario = (req:Request, res:Response, next:NextFunction):any => {
    console.log('Passou pelo intermediário');
    
    if (req.params.item === 'fim') {
        return res.send ('A requisição foi respondinda no intermediário, não chegou no controlador')
    }

    next()
}

export const intermediárioGeral = (req:Request, res:Response, next:NextFunction) => {
    console.log('Passou no intermediário Geral');
    
    next()
}