/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time24Str) {
  const greetTime = parseInt(time24Str, 10);
  if (greetTime < 12) return "Good Morning"
  if (greetTime > 17) return "Good Evening"
  return "Good Afternoon"
}
/* Write your implementation of displayMessage() */
function displayMessage(msgTime) {
  msgTime = document.getElementById("greeting").innerText;
}