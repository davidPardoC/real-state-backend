import { startExpressApp } from './app'
import { initilizeDatabase } from './Helpers/DatabaseHelper'

async function startServer() {
    await initilizeDatabase()
    startExpressApp()
}

startServer()
