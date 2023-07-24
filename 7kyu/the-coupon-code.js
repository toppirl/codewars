// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

// Examples:
// checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
// checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

// My Solution

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (
    enteredCode !== correctCode ||
    Date.parse(currentDate) > Date.parse(expirationDate)
  ) {
    console.log('Does not work')
    return false
  }
  if (
    enteredCode === correctCode &&
    Date.parse(currentDate) <= Date.parse(expirationDate)
  ) {
    return true
  }
}

// Best Practice

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    Date.parse(expirationDate) >= Date.parse(currentDate)
  )
}