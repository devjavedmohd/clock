const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime(){
    const today = new Date();
    const seconds = today.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360 - 85);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = today.getMinutes();
    const minsDegrees = ((mins / 60) * 360 - 85);
    minHand.style.transform = `rotate(${minsDegrees}deg)`;


    const hour = today.getHours();
    const hoursDegrees = ((hour / 12) * 360 - 85);
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setTime, 1000);