import dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const config = {
  database: {
    port:
      process.env.NODE_ENV === 'test'
        ? process.env.TEST_DATABASE_PORT
        : process.env.DATABASE_PORT,
    name: process.env.DATABASE_NAME,
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
  },
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
  },
};
