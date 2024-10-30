import { Sequelize, DataTypes, ForeignKey } from 'sequelize';
import { database } from '../database/db.ts';
import { usuarios } from './usuario.model.ts';

export const produtos = database.define('produtos',{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    nome: {type:DataTypes.STRING(252), allowNull:false},
    desc: {type:DataTypes.STRING(1000), allowNull:false},
    preco: {type:DataTypes.FLOAT, allowNull:false},

    id_usuarios: {
        type:DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:usuarios,
            key:'id'
        }
        
    }
});