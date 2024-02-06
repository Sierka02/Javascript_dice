const images = [
    './img/1.png',
    './img/2.png',
    './img/3.png',
    './img/4.png',
    './img/5.png',
    './img/6.png'
  ];


  function getRandomIndex() {
    return Math.floor(Math.random() * images.length);
  }
  
  function updateImage() {
    const randomIndex = getRandomIndex();
    const diceImage = document.getElementById('dice').querySelector('img');
    diceImage.src = images[randomIndex];
    diceImage.alt = `Dice Image ${randomIndex + 1}`;
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('button');
    button.addEventListener('click', updateImage);
  });
  
  updateImage();