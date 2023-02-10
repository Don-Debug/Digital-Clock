const clock = document.getElementById('clock');
const timeDisplay = document.getElementById('time');
const hourDisplay = document.querySelector('.hour');
const minuteDisplay = document.querySelector('.minute');
const secondDisplay = document.querySelector('.second');

function updateTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let time = '';
  time += (hours < 10) ? '00' + hours : hours;
  time += '-';
  time += (minutes < 10) ? '00' + minutes : minutes;
  time += '-';
  time += (seconds < 10) ? '00' + seconds : seconds;

  hourDisplay.innerText = hours.toString().padStart(2, '0');
  minuteDisplay.innerText = minutes.toString().padStart(2, '0');
  secondDisplay.innerText = seconds.toString().padStart(2, '0');;
}

// Call the updateTime function every second
setInterval(updateTime, 1000);



// the date is typed infinity
let date = new Date();

let dateString = date.toLocaleDateString();;

let i = 0;

let dateDiv = document.getElementById('date');



function typeText() {
    if (i < dateString.length) {
    dateDiv.innerHTML += dateString.charAt(i);
    i++;
      setTimeout(typeText, 300);
    } else {
        i = 0
        document.getElementById('date').innerHTML = "";
        setTimeout(typeText, 500);
    }
}



typeText();