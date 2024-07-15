export default function formatDate(date: Date) {
  console.log(typeof date);
  // Given the date, returns a string in the format of "DDth Month"
  const day = date.getDate();
  const endingNumber = day % 10;
  return day + getDateSuffix(day) + " " + getMonthString(date.getMonth());
}

function getMonthString(month: number) {
  // Given a month number, returns the month as a string
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "Invalid month";
  }
}

function getDateSuffix(day: number) {
  // Given a day number, returns the suffix for that day
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
