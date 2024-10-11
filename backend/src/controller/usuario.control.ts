import { database } from "../database/db";
import { usuarioRepo } from "../repositories/usuario.repo";

export class usuarioControll{
    static async getAll(request,response){
        const usuarios = await usuarioRepo.getAll()
        return response.send(usuarios).status(200);
    }

    static async create(request,response){
        const corpo = request.body;
        usuarioRepo.create(corpo);
        return response.send("usuario criado com sucesso").status(200);
    }

    static async atualizar(request,response){
        const corpo = request.body;
        const id = request.params.id;
        usuarioRepo.atualizar(id,corpo);
        
        return response.send("usuario atualizado com sucesso").status(200);
    }

    static async deletar(request,response){
        const id = request.params.id;
        usuarioRepo.deletar(id);
        return response.send("Usuario Apagado com Sucesso").status(200)
    }

}