import {app} from './app';

const port = 3030;
app.listen(port, () =>{
    console.log("Servidor Rodando na porta", port);
})