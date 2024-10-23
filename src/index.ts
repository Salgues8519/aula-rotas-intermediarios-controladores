import  'dotenv/config'
import express from 'express'
import {itemProdutos, buscarUsuario, buscarUsuarioQuery,} from './controladores'
import {intermediárioGeral, primeirointermediario} from './intermediarios'

const servidor = express()

servidor.use(intermediárioGeral)


servidor.get('/produtos/:item', primeirointermediario ,itemProdutos)

servidor.get('/usuario/:email', buscarUsuario)

servidor.get('/usuario',buscarUsuarioQuery)

servidor.listen(process.env.PORT)   