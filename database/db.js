//importamos sequelize
import { Sequelize } from "sequelize"
//creamos una nueva instancia de sequelize
const db = new Sequelize('database_app', 'root', 'Aspirine123', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db
