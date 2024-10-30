import {Sequelize, DataTypes, ForeignKey} from 'sequelize';
import { database } from '../database/db.ts';



export const usuarios = database.define('usuarios',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
    },
    nome: {type:DataTypes.STRING, allowNull:false},
    telefone: {type:DataTypes.STRING, allowNull:false},
    senha: {type:DataTypes.STRING, allowNull:false},
    cidade: {type:DataTypes.STRING, allowNull: false}

});


    