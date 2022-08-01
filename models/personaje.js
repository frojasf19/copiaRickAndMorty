//importamos la base de datos
import db from "../database/db.js";
//importamos DataTypes
import { DataTypes } from "sequelize";

//definimos el modelo de los personajes

const personajes = db.define('rickandmorts',{
    nombre:{
        type: DataTypes.STRING
    },
    estado:{
        type: DataTypes.STRING
    },
    especie:{
        type: DataTypes.STRING
    },
    genero:{
        type: DataTypes.STRING
    },
    origen:{
        type: DataTypes.JSON
    },
    locacion:{
        type: DataTypes.JSON
    },
    tipo:{
        type: DataTypes.STRING
    }
})

export default personajes 