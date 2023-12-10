/* Timer Stuff */

const countDownDate = new Date('Jun 24, 2021 18:00:00').getTime();

const x = setInterval(() => {
  const now = new Date().getTime();

  const difference = countDownDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  document.getElementById('timearea').innerHTML = `${days} days ${hours} hours ${minutes} minutes and ${seconds} seconds!`;

  if (difference < 0) {
    clearInterval(x);
    document.getElementById('timearea').innerHTML = 'right now!';
    document.getElementById('message').style.display = 'none';
  }
}, 1000);

let mouseX = 0;
let mouseY = 0;

function getMouse(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
}

/* Heart Moving Stuff */
const heart1 = document.getElementById('heart1');
const heart2 = document.getElementById('heart2');
const heart3 = document.getElementById('heart3');
document.addEventListener('mousemove', getMouse);

heart1.style.position = 'absolute';
let heart1x = 0;
let heart1y = 0;

heart2.style.position = 'absolute';
let heart2x = 0;
let heart2y = 0;

heart3.style.position = 'absolute';
let heart3x = 0;
let heart3y = 0;

function followMouse() {
  const distX1 = mouseX - heart1x;
  const distY1 = mouseY - heart1y;

  const distX2 = mouseX - heart2x;
  const distY2 = mouseY - heart2y;

  const distX3 = mouseX - heart3x;
  const distY3 = mouseY - heart3y;

  heart1x += distX1 / 5;
  heart1y += distY1 / 5;

  heart2x += distX2 / 3;
  heart2y += distY2 / 3;

  heart3x += distX3 / 1;
  heart3y += distY3 / 1;

  heart1.style.left = `${heart1x}px`;
  heart1.style.top = `${heart1y}px`;

  heart2.style.left = `${heart2x}px`;
  heart2.style.top = `${heart2y}px`;

  heart3.style.left = `${heart3x}px`;
  heart3.style.top = `${heart3y}px`;
}

setInterval(followMouse, 50);

/** Heart explosion * */
// eslint-disable-next-line no-unused-vars
function heartExplosion() {
  for (let i = 0; i < 15; i += 1) {
    const heart = document.createElement('img');
    heart.src = './images/heart.png';
    heart.style.width = '32px';
    heart.style.height = '32px';
    heart.style.position = 'absolute';
    const randomX = Math.floor(Math.random() * 180 - 90);
    const randomY = Math.floor(Math.random() * 180 - 90);
    heart.style.left = `${mouseX + randomX}px`;
    heart.style.top = `${mouseY + randomY}px`;
    heart.style.pointerEvents = 'none';
    const randomFade = (Math.random() * 3 + 1);
    heart.style.animation = `fadeout ${randomFade}s linear forwards`;
    document.body.appendChild(heart);
  }
}
