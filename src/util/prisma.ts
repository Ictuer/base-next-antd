import { Prisma, PrismaClient } from '@prisma/client'
import { SortOrder } from 'antd/es/table/interface'

declare const globalThis: {
  $prisma: PrismaClient
} & typeof global

const prisma = globalThis.$prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.$prisma = prisma
}

export default prisma

export const contains = (keyword?: string) => {
  return {
    contains: keyword,
    mode: Prisma.QueryMode.insensitive,
  }
}

export const parseSort = (order: { [key: string]: SortOrder }) => {
  return Object.fromEntries(
    Object.entries(order).map(([key, value]) => [
      key,
      value?.replace(/end$/, '') as Prisma.SortOrder,
    ]),
  )
}
