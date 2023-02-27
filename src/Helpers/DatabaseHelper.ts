import { Client } from 'pg'
import { config } from '../config'

export async function executeQueryDB(query: string) {
    const client = new Client({
        host: config.database.host,
        port: Number(config.database.port),
        user: config.database.user,
        password: config.database.password,
        database: config.database.name,
    })
    client.connect()
    try {
        const { rows } = await client.query(query)
        await client.end()
        return rows
    } catch (error) {
        await client.end()
        throw error
    }
}
