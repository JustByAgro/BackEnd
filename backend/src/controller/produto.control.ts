import { database } from "../database/db"
import { produtoRepo } from "../repositories/produtos.repo";

export class produtoControl{
    
    static async getAll(request,response){
        const produtos = await produtoRepo.getAll();
        return response.send(produtos).status(200);
    }

    static async create(request,response){
        const body = request.body;
        await produtoRepo.create(body);
        return response.send("Produto Adicionado com Sucesso").status(200);
    }

    static async update(request,response){
        const id = request.params.id;
        const body = request.body;
        await produtoRepo.update(id,body);
        return response.send("Produto Atualizado Com Sucesso").status(200);
    }

    static async delete(request,response){
        const id = request.params.id;
        await produtoRepo.delete(id);
        return response.send("Produto Deletado Com Sucesso").status(200);
    }   

}