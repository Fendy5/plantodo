/**
 * @Author fendy
 * @CreateTime 2022/6/23 23:03
 * @Description
 */
import { DateTime } from 'luxon'

export const getToday = () => {
  return DateTime.now().toISODate()
}

export const getCurrentDateTime = () => {
  return DateTime.now().toFormat('yyyy-MM-dd hh:mm:ss')
}

export const getCurrentWeekDates = (date: string) => {
  const week = []
  const startOfWeek = DateTime.fromISO(date).startOf('week')

  for (let i = 0; i <= 6; i++) {
    const day = startOfWeek
      .plus({ days: i })
      .setLocale(localStorage.lang ?? 'en-US')
    week.push({
      isoDate: day.toISODate(),
      day: day.toFormat('d'),
      weekDay: day.toFormat('EEE')
    })
  }
  return week
}

export const formatDate = (date: string, format: string) => {
  return DateTime.fromISO(date)
    .setLocale(localStorage.lang ?? 'en-US')
    .toFormat(format)
}

export const shiftDate = (date: string, days: number) => {
  return DateTime.fromISO(date).plus({ days: days }).toISODate()
}
