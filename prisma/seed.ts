import 'dotenv/config'
import prisma from '../src/util/prisma'
import { hashPassword } from '../src/features/auth/utils'
import { faker } from '@faker-js/faker/locale/vi'
import { Role } from '@prisma/client'

const seed = async () => {
  await prisma.user.createMany({
    data: [
      {
        email: 'pm@gmail.com',
        role: Role.ProjectManager,
        name: faker.person.fullName(),
        password: await hashPassword('123456@'),
      },
      {
        email: 'guest@gmail.com',
        role: Role.Guest,
        name: faker.person.fullName(),
        password: await hashPassword('123456@'),
      },
      {
        email: 'tester@gmail.com',
        role: Role.Tester,
        name: faker.person.fullName(),
        password: await hashPassword('123456@'),
      },
    ],
  })
}

seed()
