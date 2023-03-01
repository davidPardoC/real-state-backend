import UserRepository from '../DataAccess/UserDB'
import { UserType } from '../Types/User.type'
import { createUser } from '../UseCases/User'

const userRepository = new UserRepository()

export class UserController {
    async createNewUser(user: UserType, logedInUser: UserType) {
        const newUser = await createUser(
            user,
            logedInUser,
            userRepository.createNewUser
        )
        return newUser
    }
}
