import UserRepository from '../DataAccess/UserDB'
import { loginUser } from '../UseCases/User/login-user'

const userRepository = new UserRepository()

export default class AuthController {
    async login(email: string, password: string) {
        const sessionTokens = await loginUser(
            email,
            password,
            userRepository.getUserByEmail
        )
        return sessionTokens
    }
}
