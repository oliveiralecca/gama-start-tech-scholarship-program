import express from 'express';
import { ApolloServer } from 'apollo-server-express';
<<<<<<< Updated upstream
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
=======
>>>>>>> Stashed changes

const app = express();

const server = new ApolloServer({
<<<<<<< Updated upstream
  typeDefs,
  resolvers,
})

server.applyMiddleware({
  app,
  cors: {
    origin: 'http://localhost:3000',
  },
  bodyParserConfig: true,
})
=======

})

server.applyMiddleware({
  app,
  cors: {
    origin: 'http://localhost:3000',
  }
})

// server.get('/status', (_, response) => {
//   response.send({
//     status: 'Everything OK'
//   })
// })

// const enableCors = cors({ origin: 'http://localhost:3000' })

// server
//   .options('/authenticate', enableCors)
//   .post('/authenticate', enableCors, express.json(), (request, response) => {
//     console.log('E-mail', request.body.email, 'Senha', request.body.password);
//     response.send({
//       Ok: true,
//     });
//   })
>>>>>>> Stashed changes

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME || '127.0.0.1';

app.listen(PORT, HOSTNAME , () => {
  console.log(`Server is listening at http://${HOSTNAME}:${PORT}`)
})
