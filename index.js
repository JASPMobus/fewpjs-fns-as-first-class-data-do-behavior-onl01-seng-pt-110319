/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  hour = time.split(":")[0]
  
  switch (hour) {
    case < 12:
      return "Good Morning";
    case < 17:
      return "Good Afternoon";
    default:
      "Good Evening";
  }
}
/* Write your implementation of displayMessage() */
