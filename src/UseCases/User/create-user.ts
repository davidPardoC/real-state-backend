import UserRepository from '../../DataAccess/UserDB'
import { UserType } from '../../Types/User.type'
import bcrypt from 'bcrypt'

export async function createUser(
    user: UserType,
    createUserFromDB: typeof UserRepository.prototype.createNewUser
) {
    const hashedPassword = bcrypt.hashSync(user.password, 5)
    const newUser = await createUserFromDB({
        ...user,
        password: hashedPassword,
    })
    return newUser
}
