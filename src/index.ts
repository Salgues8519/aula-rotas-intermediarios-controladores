import  'dotenv/config'
import express from 'express'
const servidor = express()

servidor.get('/', (req, res):any => {
    console.log(req);
    return res.send('Servidor está okay!')
})

servidor.get('/usuarios', (req, res):any => {
    return res.send('Servidor funcionando, programar é legal')
})

servidor.listen(process.env.PORT)