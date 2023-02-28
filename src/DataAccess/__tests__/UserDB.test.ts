import { executeQueryDB } from '../../Helpers/DatabaseHelper'
import UserRepository from '../UserDB'

describe('User DB', () => {
    
    afterEach(async () => {
        await executeQueryDB('DELETE FROM users;')
    })

    it('Should return selected user', async () => {
        const mockUser = {
            name: 'name',
            last_name: 'lastname test',
            email: 'test@email.com',
            password: 'test password',
            phone: '123456',
            role: 'admin',
            agency_id: '123',
        }
        const userRepository = new UserRepository()
        const newUser = await userRepository.createNewUser(mockUser)
        expect(newUser).toEqual({
            name: 'name',
            last_name: 'lastname test',
            email: 'test@email.com',
        })
    })
})
