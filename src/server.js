import { createServer, Model } from 'miragejs';
import { Data } from './lib/data';

export function makeServer({ environment = 'development' } = {}) {
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
      this.namespace = 'api';
      // this.get('/users', schema => {
      //   return schema.users.all();
      // });

      this.get('/questions', schema => {
        return schema.questions.all();
      });
    },
  });

  return server;
}
