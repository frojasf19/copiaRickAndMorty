import express from 'express'
import { actualizarPersonaje, crearPersonaje, eliminarPersonaje, mostrarPersonaje, mostrarPersonajes } from '../controller/controladorPersonajes.js'

const router = express()

//definimos las rutas
router.get('/', mostrarPersonajes)

router.get('/:id', mostrarPersonaje)

router.post('/', crearPersonaje)

router.put('/:id', actualizarPersonaje)

router.delete('/:id', eliminarPersonaje)

export default router