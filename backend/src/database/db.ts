import { Sequelize } from "sequelize";

export const database = new Sequelize('JustBuyAgro-db','root','root',{
    host:'localhost',
    dialect:'mysql',
    port:3307
});