const body = document.querySelector('#body');
const bgImage = [ '1.png','2.png','3.png','4.png','5.png','6.png','7.png','8.png','9.png','10.png'];


const chosenImg = bgImage[Math.floor(Math.random()*bgImage.length)];
body.background = `../img/${chosenImg}`

