//importamos los modelos de los personajes
import personajes from '../models/personaje.js'

//mostrar todos los personajes
export const mostrarPersonajes = async (req, res) => {
    try {
        const personaje = await personajes.findAll()
        res.json(personaje)
    } catch (error) {
        res.json({message: error.message})
    }
}
//mostrar un personaje
export const mostrarPersonaje = async(req, res) => {
    try {
        const personaje = await personajes.findAll({
            where:{
                id: req.params.id
            }
        })
        res.json(personaje)
    } catch (error) {
        res.json({message: error.message})
    }
}
//crear un nuevo personaje
export const crearPersonaje = async (req, res) => {
    try {
        await personajes.create(req.body)
        res.json({message: 'Personaje creado con exito'})
    } catch (error) {
        res.json({message: 'Error al crear personaje'})
    }
}
//actualizar un personaje
export const actualizarPersonaje = async (req, res) => {
    try {
        await personajes.update(req.body,{
            where:{
                id: req.params.id 
            }
        })
        res.json({message: 'Personaje Actualizado'})
    } catch (error) {
        res.json({message: error.message})
    }
}

//eliminar un personaje
export const eliminarPersonaje = async (req, res) => {
    try {
        await personajes.destroy(req.params.id)
        res.json({message: 'Personaje eliminado con exito'})
    } catch (error) {
        res.json({message: error.message})
    }
}