import bcrypt from 'bcrypt'
import { promisify } from 'util'

export const hashPassword = (password: string) => {
  return new Promise<string>((resolve, reject) =>
    bcrypt.hash(password + process.env.SALT, 10, (error, res) =>
      error ? reject(error) : resolve(res),
    ),
  )
}

export const comparePassword = (
  plainPassword: string,
  hashedPassword: string,
) => {
  const compare = promisify(bcrypt.compare)
  return compare(plainPassword + process.env.SALT, hashedPassword)
}
