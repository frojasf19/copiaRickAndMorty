//importamos lo que utilizaremos
import express from 'express'
import db from './database/db.js'
import router from './routes/routes.js'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()


app.use(bodyParser.json())
app.use(express.json())
app.use(cors())
const PORT = 4000
app.use('/', router)

try {
    await db.authenticate()
    console.log('conexion exitosa a la base de datos')
} catch (error) {   
    console.log('ocurrio un error al intentar conectar con la base de datos')
}


app.listen(PORT)
console.log('Api escuchando en el puerto' + PORT)
