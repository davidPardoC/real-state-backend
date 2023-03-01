import dotenv from 'dotenv'
dotenv.config()

export const config = {
    database: {
        port: process.env.NODE_ENV === "test" ? process.env.TEST_DATABASE_PORT : process.env.PORT,
        name: process.env.DATABASE ,
        user: process.env.DB_USERNAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
    },
    jwt: {
        jwt_secret: process.env.JWT_SECRET
    }
}
