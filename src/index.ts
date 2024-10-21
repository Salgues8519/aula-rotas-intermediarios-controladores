import  'dotenv/config'
import express from 'express'
const servidor = express()


const pessoas = [
    {nome: 'rafael', email:'rafael@email.com'},
    {nome: 'joão', email:'joao@email.com'},
    {nome: 'maria', email:'maria@email.com'},
]

servidor.get('/usuario/:nome', (req, res):any => {
    const { nome } = req.params
    const pessoa = pessoas.find(item => {
        return item.nome === nome
    })
    
    if (!pessoa) {
        return res.send('pessoa não encontrada')
    }

    return res.send(pessoa)
})


servidor.get('/produtos/:frutas', (req, res):any => {
    console.log(req.params.frutas);
    
    return res.send('Servidor funcionando, programar é legal')
})

servidor.listen(process.env.PORT)   