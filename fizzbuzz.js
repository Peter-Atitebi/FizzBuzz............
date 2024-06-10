function checkFizz() {
  let result = document.getElementById("fizzorbuzz");

  let num = document.getElementById("number").value;

  if (num > 0 && num % 3 == 0) {
    result.innerHTML = "Fizz";
  } else if (num > 0 && num % 5 == 0) {
    result.innerHTML = "Buzz";
  } else if (num > 0 && num % 3 == 0 && num % 5 == 0) {
    result.innerHTML = "FizzBuzz";
  } else if (num == 0) {
    result.innerHTML = "Input a number higher than 0";
  } else {
    result.innerHTML = `${num} is neither Fizz nor Buzz.`;
  }
}
