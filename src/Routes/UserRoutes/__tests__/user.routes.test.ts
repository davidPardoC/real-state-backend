import { app } from '../../../app'
import supertest from 'supertest'

const api = supertest(app)

describe('UserRoutes', () => {
    it('should register new use', async () => {
        await api.post('/users').send({
            name: 'David',
            lastName: 'Codes',
            email: 'testEmail@email.com',
            password: 'some-password',
        }).expect(200)
    })
})
