import {Sequelize, DataTypes, ForeignKey} from 'sequelize';
import { database } from '../database/db.ts';



export const usuarios = database.define('usuarios',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    nome: DataTypes.STRING,
    telefone: DataTypes.STRING,
    senha: DataTypes.STRING,

});


    