import UserRepository from '../../DataAccess/UserDB';
import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import { config } from '../../config';
import { NotFoundError, UnAuthorizedError } from '../../Errors/CustomErrors';

export async function loginUser(
  email: string,
  password: string,
  getUserByEmail: typeof UserRepository.prototype.getUserByEmail,
) {
  const user = await getUserByEmail(email);
  if (!user) {
    throw new NotFoundError();
  }
  if (!bcrypt.compareSync(password, user.password)) {
    throw new UnAuthorizedError('Credenciales incorrectas');
  }
  delete user.password;
  const token = jwt.sign(user, config.jwt.jwt_secret as Secret, {
    expiresIn: '1d',
  });

  const refreshToken = jwt.sign(user, config.jwt.jwt_secret as Secret, {
    expiresIn: '7d',
  });

  return { token, refreshToken };
}
