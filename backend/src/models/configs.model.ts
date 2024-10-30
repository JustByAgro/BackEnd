import { Sequelize, DataTypes, ForeignKey } from 'sequelize';
import { database } from '../database/db.ts';

import { produtos } from './produto.model.ts';
import { usuarios } from './usuario.model.ts';

usuarios.hasMany(produtos,{
    foreignKey: 'usuarios_id', as: 'produtos'
});

produtos.belongsTo(usuarios,{
    foreignKey: "usuarios_id", as: 'usuarios'
});