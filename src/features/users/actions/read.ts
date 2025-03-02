'use server'

import prisma from '@/util/prisma'
import { Prisma, Role } from '@prisma/client'

interface Params  {
  pageSize:number 
  current:number
  name?:string 
  email?:string
  role?:Role
}
export const getUsers = async ({pageSize, current, ...rest}:Params) => {
  const where:Prisma.UserWhereInput = {}
  if(rest.email){
    where.email = {
      contains: rest.email,
      mode:'insensitive'
    }
  }
  if(rest.name){
    where.name = {
      contains: rest.name,
      mode: 'insensitive',
    }
  }
  if(rest.role){
    where.role = rest.role
  }
  
  try {
    const [data, total] = await prisma.$transaction([
      prisma.user.findMany({
        where,
        take:pageSize,
        skip: pageSize * (current-1)
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
