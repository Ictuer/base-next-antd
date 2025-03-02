'use server'

import prisma from '@/util/prisma'
import { Prisma } from '@prisma/client'

export const createUser = async(data: Prisma.UserCreateInput)=>{
    try {
        const user = await prisma.user.create({
            data
        })
        return { success: true, data: user }
    } catch (error ) {
        return {success:false, message:(error as any).message}
    }
}