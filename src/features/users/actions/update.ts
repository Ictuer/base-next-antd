'use server'

import prisma from '@/util/prisma'
import { Prisma } from '@prisma/client'

export const updateUser = async( id:number, data: Prisma.UserUpdateInput)=>{
    try {
        const user = await prisma.user.update({
          where: {
            id,
          },
          data,
        })
        return { success: true, data: user }
    } catch (error ) {
        return {success:false, message:(error as any).message}
    }
}