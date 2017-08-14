const colors = require("./colors")
const moment = require("moment")

let hourSeconds = (moment().format("HH") * 3600)
let minuteSeconds = (moment().format("mm") * 60)
let seconds = (moment().format("ss") * 1)
let totalSeconds = (hourSeconds + minuteSeconds + seconds)

function isDayLight() {
  if (moment().isDST("YYYY, M, D") == false) {
    return ("is not ");
  } else if (moment().isDST("YYYY, M, D") == true)
    return ("is ")
}

function isLeapYear() {
  if (moment().isLeapYear("YYYY, M, D") == false) {
    return ("is not ");
  } else if (moment().isLeapYear("YYYY, M, D") == true)
    return ("is ")
}

console.log("It is " + colors.blue(moment().format("MMMM Do YYYY, h:mm:ss a")));

console.log("It is the " + colors.magenta(moment().format('DDDo')) + " day of the year.");

console.log("It is " + colors.cyan(totalSeconds) + " seconds into the day.");

console.log("It " + colors.green(isDayLight()) + "during daylight savings time.");

console.log("It " + colors.red(isLeapYear()) + "a leap year");
