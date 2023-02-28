import { Client } from 'pg'
import { config } from '../config'
import fs from 'fs'

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

export async function initilizeDatabase() {
    const sql = fs.readFileSync('sql/create_tables.sql').toString()
    await executeQueryDB(sql)
}
