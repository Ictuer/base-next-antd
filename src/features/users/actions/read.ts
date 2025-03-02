'use server'

import prisma from '@/util/prisma'
import { Prisma } from '@prisma/client'

export const getUsers = async (where?: Prisma.UserWhereInput) => {
  try {
    const [data, total] = await prisma.$transaction([
      prisma.user.findMany({
        where,
      }),
      prisma.user.count({ where }),
    ])

    return {
      data,
      total,
      success: true,
    }
  } catch {
    return {
      data: [],
      total: 0,
      success: false,
    }
  }
}
