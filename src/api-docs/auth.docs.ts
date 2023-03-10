const post = {
  description: 'Will login the user with email and password.',
  requestBody: {
    description: 'User email and password.',
    required: true,
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            email: { type: 'string', default: 'myemail@email.com' },
            password: { type: 'string', default: 'mypassword' },
          },
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'User logged in successfully.',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              token: {
                type: 'string',
              },
              refreshToken: {
                type: 'string',
              },
            },
          },
        },
      },
    },
  },
};

export const authDocs = { post };
