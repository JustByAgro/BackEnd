import { usuarioControll } from "../controller/usuario.control";
import { Router } from 'express';

export const rotasUsuario = new Router();   
rotasUsuario.get('/usuarios',usuarioControll.getAll);
rotasUsuario.post('/usuarios',usuarioControll.create);
rotasUsuario.put('/usuarios/:id',usuarioControll.atualizar);
rotasUsuario.delete('/usuarios/:id',usuarioControll.deletar);