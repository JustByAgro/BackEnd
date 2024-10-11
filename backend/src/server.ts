import {app} from './app';
import { database } from './database/db';

database.sync()





const port = 3030;
app.listen(port, () =>{
    console.log("Servidor Rodando na porta", port);
});