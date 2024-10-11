import express from 'express';

import { rotasUsuario } from './routes/usuarios.routes';

export const app = express();



app.use(express.json());
app.use(rotasUsuario);

