import { createServer } from 'http';

// createServer(callback para tratar as requisições)
const server = createServer((request, response) => {
  switch (request.url) {
    case '/status': {
      response.writeHead(200); //header da resposta do servidor (código http)
      response.write('Everything OK'); //corpo da mensagem
      response.end(); //fecha a resposta
      break;
    }
    default: {
      response.writeHead(404, 'Service not found.'); 
      response.end();
    }
  }
})

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

// método .listen(porta, nome do localhost, função que é executada assim que o servidor começa a escutar)
server.listen(PORT, HOSTNAME , () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
})
