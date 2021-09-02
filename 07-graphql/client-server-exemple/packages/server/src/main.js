//import { createServer } from 'http';
//import { parse } from 'querystring';
//import { readFile } from 'fs'; -> carregar um arquivo aqui dentro do server, com o módulo nativo do Node (filesystem - fs)
//import { resolve } from 'path'; -> o node não lê o caminho do path (em /sign-in) a partir do main, e sim a partir da pasta raiz, esse método resolve esse problema
import express from 'express';
import cors from 'cors';

const server = express();
// server.use(cors()); -> uma forma de responder o erro do cors

server.get('/status', (_, response) => {
  response.send({
    status: 'Everything OK'
  })
})

const enableCors = cors({ origin: 'http://localhost:3000' })

server
  .options('/authenticate', enableCors)
  .post('/authenticate', enableCors, express.json(), (request, response) => {
    console.log('E-mail', request.body.email, 'Senha', request.body.password);
    response.send({
      Ok: true,
    });
  })

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

// método .listen(porta, nome do localhost, função que é executada assim que o servidor começa a escutar)
server.listen(PORT, HOSTNAME , () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
})
