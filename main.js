
// yearisLeap?

  function isLeapYear(year) {

  if (year % 400 === 0) {
      return "Leap year."
  }
    
   else if (year % 100 === 0) {
     return "Not leap year."
   }
  else if (year % 4 === 0) {
     return "Leap year."
  } 
  else {
    return "Not leap year."
}

}
console.log(isLeapYear("year") )
// TicketPrice
// Children (age <= 12): $10
// Teenagers (age 13-17): $15
// Adults (age >= 18): $20

function calculateTicketPrice(age) {
  if (age <= 12){ 
      return 10 ;
  }
   else if ((age = 13) && (age = 17)) {
    return 15 ;
   }
     
   else {
      return 20;
   }
}
console.log(calculateTicketPrice("age"))

// Fibonacci

function Fibonacci(n){
  if (n = 0){
    return 0
  }
 else if (n = 1) {
    return  1
  } 
  else {
    return Fibonacci(n-1) + Fibonacci(n-2)
  }
}

console.log(Fibonacci("n"))
// Palindrome string

function isPalindrome(str) {
  
  if (str.length === 0 || str.length === 1) {
      return true;
  }

   else if (str[0] === str[str.length - 1]) {
      
      return isPalindrome(str.slice(1, str.length - 1));
  } else {
      return false;
  }
}
console.log(isPalindrome("anna"));