import { produtos } from '../models/produto.model.ts';

export class produtoRepo{


    //GET
    static async getAll(){
        return await produtos.findAll();
    }

    //POST
    static async create(body){
        await produtos.create(body);
        return true;
    }


    //PUT
    static async update(id,body){
        const produto = await produtos.findByPk(id);
        
        if (produto){
            produto.set(body);
            produto.save;
            return true;
        } else{
            throw Error;
        }
    }

    static async delete(id){
        const produto = await produtos.findByPk(id);
        produtos.destroy({
            where:{id:id}
        });
        return true;
            
    }


}