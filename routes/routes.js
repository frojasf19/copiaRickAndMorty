import express from 'express'
import { actualizarPersonaje, crearPersonaje, mostrarPersonaje, mostrarPersonajes } from '../controller/controladorPersonajes.js'

const router = express()

//definimos las rutas
router.get('/', mostrarPersonajes)
router.get('/:id', mostrarPersonaje)

router.post('/', crearPersonaje)

router.put('/:id', actualizarPersonaje)

export default router