import UserRepository from '../../DataAccess/UserDB'
import { UserType } from '../../Types/User.type'
import bcrypt from 'bcrypt'
import User from '../../Entities/User'
import { Roles } from '../../Enums/RolesEnums'
import { ForbiddenError } from '../../Errors/CustomErrors'

export async function createUser(
    user: UserType,
    logedInUser: UserType,
    createUserFromDB: typeof UserRepository.prototype.createNewUser
) {
    const { name, last_name, email, role } = logedInUser
    
    const logedInUserUserInstance = new User({
        name,
        last_name,
        email,
        role: role as Roles,
    })

    if (!logedInUserUserInstance.canUserCreateUser(user.role)) {
        throw new ForbiddenError()
    }
    const hashedPassword = bcrypt.hashSync(user.password, 5)
    const newUser = await createUserFromDB({
        ...user,
        password: hashedPassword,
    })
    return newUser
}
