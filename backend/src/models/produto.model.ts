import { Sequelize, DataTypes } from 'sequelize';
import { database } from '../database/db.ts';

export const produtos = database.define('produtos',{
    id: {
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey: true
    },
    nome: DataTypes.STRING(252),
    desc: DataTypes.STRING(1000),
    preco: DataTypes.FLOAT,
    
});