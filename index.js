/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

const greet = (str) => { 
  hour = parseInt(str.split(':')[0])
  if(hour > 17)
    return 'Good Evening'
    else if (hour > 12) 
    return 'Good Afternoon'
    else
    return 'Good Morning'
}

const displayMessage = (str) => {
  document.getElementById('greeting').innerText = str
}