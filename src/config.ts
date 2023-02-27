import dotenv from 'dotenv'
dotenv.config()

export const config = {
    database: {
        name: process.env.NODE_ENV === "test" ? process.env.TEST_DATABASE : process.env.DATABASE ,
        user: process.env.DB_USERNAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: process.env.PORT,
    },
}
