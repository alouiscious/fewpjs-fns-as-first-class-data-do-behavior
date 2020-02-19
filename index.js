/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of displayMessage() */
function displayMessage(msgTime) {
  document.getElementById("greeting").innerText = msgTime;
}
/* Write your implementation of greet() */
function greet(timeStr) {
  const greetTime = parseInt(timeStr, 10);
  if (greetTime < 12) return "Good Morning"
  if (greetTime > 17) return "Good Evening"
  return "Good Afternoon"
}