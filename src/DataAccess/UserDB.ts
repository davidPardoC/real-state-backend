import { executeQueryDB } from '../Helpers/DatabaseHelper'
import { UserType } from '../Types/User.type'

export default class UserRepository {
    constructor() {}

    async createNewUser(user: UserType) {
        const query = `INSERT INTO users(name, lastname, email, password) VALUES ('${user.name}','${user.lastname}', '${user.email}', '${user.password}')  RETURNING name, lastname, email;`
        try {
            const result = await executeQueryDB(query)
            return result[0]
        } catch (error) {
            throw error
        }
    }
}
