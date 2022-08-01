import express from 'express'
import { crearPersonaje, mostrarPersonajes } from '../controller/controladorPersonajes.js'

const router = express()

//definimos las rutas
router.get('/', mostrarPersonajes)

router.post('/', crearPersonaje)


export default router