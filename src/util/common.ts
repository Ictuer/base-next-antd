export const removeAccents = (text: string) =>
  text
    ?.toString()
    ?.normalize('NFD')
    ?.replace(/[\u0300-\u036f]/g, '') || text
