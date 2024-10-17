
import { usuarioControll } from '../controller/usuario.control';
import { Router } from 'express';

export const rotasUsuarios = new Router();   
rotasUsuarios.get('/usuarios',usuarioControll.getAll);
rotasUsuarios.post('/usuarios',usuarioControll.create);
rotasUsuarios.put('/usuarios/:id',usuarioControll.atualizar);
rotasUsuarios.delete('/usuarios/:id',usuarioControll.deletar);