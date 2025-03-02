import { Formula } from '@prisma/client'
export const STATUS_OPTIONS: any = [
  {
    label: 'Đang xử lý',
    value: 'in_progress',
    color: 'volcano',
  },
  {
    label: 'Sắp tới hạn',
    value: 'upcoming',
  },
  {
    label: 'Quá hạn',
    value: 'overdue',
  },
  {
    label: 'Hoàn thành đúng hạn',
    value: 'completed_on_time',
  },
  {
    label: 'Hoàn thành quá hạn',
    value: 'completed_lated',
  },
]

export const STATUS_ENUMS: any = {
  in_progress: {
    label: 'Đang xử lý',
    color: '#00C49F',
  },
  upcoming: {
    label: 'Sắp tới hạn',
    color: '#FFBB28',
  },
  overdue: {
    label: 'Quá hạn',
    color: '#FF8042',
  },
  completed_on_time: {
    label: 'Hoàn thành đúng hạn',
    color: '#6B5B95',
  },
  completed_lated: {
    label: 'Hoàn thành quá hạn',
    color: '#0088FE',
  },
}

export const FORMULA_ENUMS: any = {
  [Formula.Avg]: {
    text: 'Trung bình',
  },
  [Formula.Max]: {
    text: 'Lớn nhất',
  },
  [Formula.Min]: {
    text: 'Nhỏ nhất',
  },
  [Formula.Sum]: {
    text: 'Tổng',
  },
}

export const REPORT_TYPE_LABELS: any = {
  Float: 'Số thực',
  Integer: 'Số nguyên',
  Percent: 'Phần trăm',
  Text: 'Văn bản',
  YesNo: 'Có/không',
}

export const STATUS_LABELS: any = {
  completed_on_time: 'Hoàn thành đúng hạn',
  completed_lated: 'Hoàn thành quá hạn',
  in_progress: 'Đang thực hiện',
  upcoming: 'Sắp tới hạn',
  overdue: 'Quá hạn',
}
