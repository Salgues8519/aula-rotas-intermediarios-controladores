import {Request, Response} from 'express'

const pessoas = [
    {nome: 'rafael', email:'rafael@email.com'},
    {nome: 'joão', email:'joao@email.com'},
    {nome: 'maria', email:'maria@email.com'},
]

export const itemProdutos = (req:Request, res:Response):any => {
    console.log(req.params.item);
    return res.send('Chegou no controlador')
}

export const buscarUsuario =(req:Request, res:Response):any => {
    const { email } = req.params
    const pessoa = pessoas.find(item => {
        return item.email === email
    })
    
    if (!pessoa) {
        return res.send('pessoa não encontrada')
    }

    return res.send(pessoa)
}

export const buscarUsuarioQuery =  (req:Request, res:Response):any => {
    const { email } = req.query
    if (!email) {
        return res.send ('Paramentro não informado')
    }

    const pessoa = pessoas.find(item => {
        return item.email === email
    })
    
    if (!pessoa) {
        return res.send('pessoa não encontrada')
    }

    return res.send(pessoa)
}