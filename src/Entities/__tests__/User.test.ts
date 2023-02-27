import User from '../User'

describe('User Entity Test', () => {
    it('Should validate password', () => {
        const user = new User('test', 'test lastname', 'email@test.com', '')
        expect(() => user.validatePassword()).toThrowError()
    })
})
