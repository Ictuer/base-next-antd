import { format, startOfMonth } from 'date-fns'

export const getLocalDate = (date: Date, includeDate?: boolean) =>
  date instanceof Date
    ? format(date, includeDate ? 'dd/MM/yyyy' : 'MM/yyyy')
    : ''
