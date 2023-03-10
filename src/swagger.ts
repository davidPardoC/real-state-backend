import { authDocs } from './api-docs/auth.docs';
import { usersDocs } from './api-docs/users.docs';

export const swaggerDocument = {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'APIs Document',
    description: 'Real State API for a SAS project.',
    termsOfService: '',
    contact: {
      name: 'David Pardo',
      email: 'pardodavid10@gmail.com',
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },
  servers: [
    {
      url: 'http://localhost:5500',
    },
  ],
  paths: {
    '/users': {
      get: usersDocs.get,
    },
    '/auth/login': {
      post: authDocs.post,
    },
  },
};
