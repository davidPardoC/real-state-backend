import { executeQueryDB } from '../../Helpers/DatabaseHelper'
import UserRepository from '../UserDB'

describe('User DB', () => {
    beforeAll(async () => {
        await executeQueryDB(
            'CREATE TABLE IF NOT EXISTS users( user_id serial PRIMARY KEY, name text  NOT NULL, lastname text  NOT NULL, password text NOT NULL, email text UNIQUE NOT NULL);'
        )
    })

    afterEach(async () => {
        await executeQueryDB('DELETE FROM users;')
    })

    it('Should return selected user', async () => {
        const mockUser = {
            name: 'name',
            lastname: 'lastname test',
            email: 'test@email.com',
            password: 'test password',
        }
        const userRepository = new UserRepository()
        const newUser = await userRepository.createNewUser(mockUser)
        expect(newUser).toEqual({
            name: 'name',
            lastname: 'lastname test',
            email: 'test@email.com',
        })
    })
})
