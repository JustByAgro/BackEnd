import { database } from '../database/db.ts';
import { Sequelize, DataTypes } from 'sequelize';

export const produtos = database.define('produtos',{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    nome: DataTypes.STRING(252),
    desc: DataTypes.STRING(1000),
    preco: DataTypes.FLOAT,
    
    
})