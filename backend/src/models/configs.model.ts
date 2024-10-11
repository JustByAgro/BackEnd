import { usuarios } from './usuario.model.ts';
import { produtos } from './produto.model.ts';

usuarios.belongsTo(produtos,{
    foreignKey:'fk_produto'
});
usuarios.hasMany(produtos,{
    foreignKey:'fk_produto'
});