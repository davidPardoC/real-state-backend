import { executeQueryDB } from '../Helpers/DatabaseHelper'
import { UserType } from '../Types/User.type'

export default class UserRepository {
    constructor() {}

    async createNewUser(user: UserType) {
        const query = `INSERT INTO users(name, last_name, email, password, phone, role, agency_id) 
        VALUES ('${user.name}','${user.last_name}', '${user.email}', '${user.password}', '${user.phone}', '${user.role}', '${user.agency_id}')  
        RETURNING name, last_name, email;`

        try {
            const result = await executeQueryDB(query)
            return result[0]
        } catch (error) {
            throw error
        }
    }

    async getUserByEmail(email: string) {
        const query = `SELECT name, last_name, email, phone, password FROM users WHERE email = '${email}';`
        try {
            const result = await executeQueryDB(query)
            return result[0]
        } catch (error) {
            throw error
        }
    }
}
