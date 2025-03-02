import { Role } from "@prisma/client"

export function enumToOptions<T>(enumObj: T): { label: string; value: string }[] {
  return Object.keys(enumObj).map((key) => ({
    label: key.charAt(0) + key.slice(1).toLowerCase(), // Capitalize first letter
    value: key,
  }))
}