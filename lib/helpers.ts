export function DateToUTCDate(date: Date) {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDay(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
    date.getMilliseconds()
  );
}
