import { Role } from "@prisma/client"
import { enumToOptions } from "@/util/type"

export const ROLE_OPTIONS = enumToOptions(Role)