import express from 'express';

import { rotasUsuarios } from './routes/usuarios.routes';
import { rotasProdutos } from './routes/produtos.routes';

export const app = express();



app.use(express.json());
app.use(rotasUsuarios);
app.use(rotasProdutos);

