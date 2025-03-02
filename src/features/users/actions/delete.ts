'use server'

import prisma from '@/util/prisma'

export const deleteUser = async (id:number) => {
  try {
    await prisma.user.delete({
        where:{id}
    })
    return {success:true, message:'Deleted Successfully'}
  } catch(error) {
    return {success:false, message: (error as any).message}

  }
}
