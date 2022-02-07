import { createServer, Model } from 'miragejs';
import { Data } from './lib/data';

export function makeServer({
  environment = import.meta.process.env.VITE_NODE_ENV,
} = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      question: Model,
    },

    seeds(server) {
      // server.create('user', {
      //   id: '1',
      //   firstName: 'john',
      //   lastName: 'doe',
      //   password: 'easypassword123',
      // });

      Data.forEach(data => {
        server.create('question', data);
      });
    },

    routes() {
      this.namespace = '/api';
      this.timing = 2000;

      this.get('/users', schema => {
        return schema.users.all();
      });

      this.get('/questions', schema => {
        return schema.questions.all();
      });

      this.get('/questions/:id', (schema, request) => {
        let id = request.params.id;
        return schema.questions.find(id);
      });
    },
  });

  return server;
}
