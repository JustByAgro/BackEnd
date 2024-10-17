import { Sequelize } from "sequelize";



export const database = new Sequelize('JustBuyAgroDB','root','root',{
    host:'localhost',
    dialect:'mysql',
    port:3307
});