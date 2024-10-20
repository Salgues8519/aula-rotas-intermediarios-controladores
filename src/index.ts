import express from 'express'
const servidor = express()

servidor.get('/', (req, res):any => {
    return res.send('Servidor está okay!')
})

servidor.listen()