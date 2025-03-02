SELECT id, name
FROM users
WHERE name like '%$1%'

-- https://www.prisma.io/docs/orm/prisma-client/using-raw-sql/typedsql
-- prisma generate --sql --watch