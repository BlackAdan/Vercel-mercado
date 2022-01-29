import {coneccion} from '../lib/database'
const express = require('express')
const app = express()
const bodyparse = require('body-parser')
const  cors = require('cors')

app.use(bodyparse.json())
app.use(cors())

coneccion();

app.use(require('../route/inventario'))
app.use(require('../route/empaque'))
app.use(require('../route/remisiones'))
app.use(require('../route/listaremision'))
app.use(require('../route/listasimilar'))
app.use(require('../route/similares'))
app.use(require('../route/fecha')) 
app.use(require('../route/clientes')) 
app.use(require('../route/abonos')) 
app.use(require('../route/devoluciones')) 
app.use(require('../route/extras')) 
app.use(require('../route/listaCortes')) 
app.use(require('../route/listaRecepcion')) 
app.use(require('../route/listaReparto')) 
app.use(require('../route/recepciones')) 
app.use(require('../route/reparto'))
app.use(require('../route/retiros'))
app.use(require('../route/salidas'))
app.use(require('../route/usuarios'))

app.get('/api/hello',(req, res) => {
    res.status(200).json('hola desde hello')
})

app.get('*',(req, res)=>{
    res.send('Pagina de inicio de mercado')
})

module.exports = app