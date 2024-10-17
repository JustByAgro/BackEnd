import { produtoControl } from "../controller/produto.control";
import  { Router } from 'express';

export const rotasProdutos = new Router();
rotasProdutos.get('/produtos', produtoControl.getAll);
rotasProdutos.post('/produtos', produtoControl.create);
rotasProdutos.put('/produtos/:id',produtoControl.update);
rotasProdutos.delete('/produtos/:id',produtoControl.delete);
