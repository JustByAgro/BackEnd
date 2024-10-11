import { usuarios } from '../models/usuario.model.ts';

export class usuarioRepo {

        // Função para pegar os usuarios { GET }
        static async getAll(){
            return await usuarios.findAll();
        }

        //Função para adicionar novo usuario { POST }
        static async create(corpo){
            await usuarios.create(corpo);
            return true
        }

        // Função para atualizar usuario { PUT }
        static async atualizar(id,corpo){
            const usuario = await usuarios.findByPk(id);
            
                if (usuario){
                    usuario.set(corpo);
                    usuario.save();
                    return true;        
                } else{
                    throw Error;
                }
                   
        }

        static async deletar(id){
            const usuario = await usuarios.findByPk(id);
            usuarios.destroy(
                {
                    where:{id:id}
                }
            );
            return true;
        }

}