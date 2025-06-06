/* eslint-disable no-param-reassign */
// A little script to set up the wonderful Christmas countdown

let catMode = false;

const now = new Date();
const month = now.getMonth();
const day = now.getDate();

/** Display the different days * */
function displayImages(idArray) {
  idArray.forEach((id) => {
    document.getElementById(id).style.display = 'block';
  });

  const catsmasModeDisplay = catMode ? 'block' : 'none';

  // Show the catsmas stuff
  document.getElementById('sprout1').style.display = catsmasModeDisplay;
  document.getElementById('sprout2').style.display = catsmasModeDisplay;
  document.getElementById('bean1').style.display = catsmasModeDisplay;
  document.getElementById('bean2').style.display = catsmasModeDisplay;
  document.getElementById('catsmasTitle').style.display = catsmasModeDisplay;
  document.getElementById('cataudio').style.display = catMode ? 'inline' : 'none';
  document.getElementById('audio').style.display = catMode ? 'none' : 'inline';
  document.getElementById('crossedTitle').style.display = catsmasModeDisplay;
  document.getElementById('normalTitle').style.display = catMode ? 'none' : 'block';
  document.getElementById('toggleDiv').style.display = 'block';
  document.title = catMode ? 'The 12 Days of C̵u̵t̵e̵s̵m̵a̵s̵ Catsmas' : 'The 12 Days of Cutesmas';
}

/** Set up page based on the date * */
function setUp() {
  if (month === 11) {
    document.getElementById('finalLine').innerHTML = '<h3>Come back tomorrow for more!</h3>';
    if (day >= 25) {
      document.getElementById('openingLine').innerHTML = '<p>On the 12th day of Cutesmas my true love gave to me...</p>';
      document.getElementById('finalLine').innerHTML = '<h1 id=\'MerryChristmas\'>Merry Christmas Maddi! I\'ll see you in a few days!!!</h1>';
      displayImages(['twelve', 'eleven', 'ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']);
    } else if (day >= 24) {
      document.getElementById('openingLine').innerHTML = '<p>On the 11th day of Cutesmas my true love gave to me...</p>';
      displayImages(['eleven', 'ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']);
    } else if (day >= 23) {
      document.getElementById('openingLine').innerHTML = '<p>On the 10th day of Cutesmas my true love gave to me...</p>';
      displayImages(['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']);
    } else if (day >= 22) {
      document.getElementById('openingLine').innerHTML = '<p>On the 9th day of Cutesmas my true love gave to me...</p>';
      displayImages(['nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']);
    } else if (day >= 21) {
      document.getElementById('openingLine').innerHTML = '<p>On the 8th day of Cutesmas my true love gave to me...</p>';
      displayImages(['eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']);
    } else if (day >= 20) {
      document.getElementById('openingLine').innerHTML = '<p>On the 7th day of Cutesmas my true love gave to me...</p>';
      displayImages(['seven', 'six', 'five', 'four', 'three', 'two', 'one']);
    } else if (day >= 19) {
      document.getElementById('openingLine').innerHTML = '<p>On the 6th day of Cutesmas my true love gave to me...</p>';
      displayImages(['six', 'five', 'four', 'three', 'two', 'one']);
    } else if (day >= 18) {
      document.getElementById('openingLine').innerHTML = '<p>On the 5th day of Cutesmas my true love gave to me...</p>';
      displayImages(['five', 'four', 'three', 'two', 'one']);
    } else if (day >= 17) {
      document.getElementById('openingLine').innerHTML = '<p>On the 4th day of Cutesmas my true love gave to me...</p>';
      displayImages(['four', 'three', 'two', 'one']);
    } else if (day >= 16) {
      document.getElementById('openingLine').innerHTML = '<p>On the 3rd day of Cutesmas my true love gave to me...</p>';
      displayImages(['three', 'two', 'one']);
    } else if (day >= 15) {
      document.getElementById('openingLine').innerHTML = '<p>On the 2nd day of Cutesmas my true love gave to me...</p>';
      displayImages(['two', 'one']);
    } else if (day >= 14) {
      document.getElementById('openingLine').innerHTML = '<p>On the 1st day of Cutesmas my true love gave to me...</p>';
      displayImages(['oneS']);
    } else {
      document.getElementById('openingLine').innerHTML = '<p>The 12 Days of Cutesmas begins on December 14th! Come back then!</p>';
      document.getElementById('finalLine').innerHTML = '';
    }
  } else {
    document.getElementById('openingLine').innerHTML = '<p>Come back in December to experience the magic!!</p>';
  }
}
setUp();

// Alternate the title colors
let original = true;
setInterval(() => {
  const reds = document.getElementsByClassName('r');
  const greens = document.getElementsByClassName('g');
  Array.from(reds).forEach((el) => {
    if (original) {
      el.style.color = 'green';
    } else {
      el.style.color = 'red';
    }
  });
  Array.from(greens).forEach((el) => {
    if (original) {
      el.style.color = 'red';
    } else {
      el.style.color = 'green';
    }
  });
  original = !original;
}, 1000);

/** Play Music * */
// eslint-disable-next-line no-unused-vars
function playMusicNote(e, soundByte) {
  new Audio(soundByte).play();
  for (let i = 0; i < 15; i += 1) {
    const note = document.createElement('img');
    const noteType = Math.floor((Math.random() * 3) + 1);
    if (noteType === 1) {
      note.src = './images/note1.png';
    } else if (noteType === 2) {
      note.src = './images/note2.png';
    } else {
      note.src = './images/note3.png';
    }
    note.style.width = '32px';
    note.style.height = '32px';
    note.style.position = 'absolute';
    const randomX = Math.floor(Math.random() * 270 - 135);
    const randomY = Math.floor(Math.random() * 270 - 135);
    note.style.left = `${e.clientX + randomX}px`;
    note.style.top = `${e.clientY + randomY}px`;
    note.style.pointerEvents = 'none';
    const randomFade = (Math.random() * 2 + 1);
    note.style.animation = `fadeout ${randomFade}s linear forwards`;
    document.body.appendChild(note);
  }
}

/** Toggle cat or standard mode * */
// eslint-disable-next-line no-unused-vars
function toggleCatsmas(e) {
  catMode = !catMode;
  setUp();
}
