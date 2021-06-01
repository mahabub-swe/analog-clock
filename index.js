let hourHand = document.querySelector('.hour');
let minuteHand = document.querySelector('.minute');
let secondHand = document.querySelector('.second');

// { //tik-tik clock (minute and hour hand does not move every second rather only when minute and hour gets changed)
    //               (as time variabls gets 0 value after the highest value so the transition will not be smoothly affected)
// let hour = new Date().getHours();
// let minute = new Date().getMinutes();
// let second = new Date().getSeconds();

// (function timer(){
//     hour = new Date().getHours();
//     minute = new Date().getMinutes();
//     second = new Date().getSeconds();
    
//     hourHand.style.transform = `rotate(${hour*30-90}deg)`;
//     minuteHand.style.transform = `rotate(${minute*6-90}deg)`;
//     secondHand.style.transform = `rotate(${second*6-90}deg)`;
//     setTimeout(timer,1000)
// })();
// }

{   //motion clock (minute and hour hand gets changed every seconds, so the movement is not eyecatchy)
    //             (as time variabls of intial time position gets incremented rather any further decrement so the transition will be smoothly affected here)
    let intialHourHandPosition = (new Date().getHours())*30-90;
    let intialMinuteHandPosition = (new Date().getMinutes())*6-90;
    let intialSecondHandPosition = (new Date().getSeconds())*6-90;

    hourHand.style.transform = `rotate(${intialHourHandPosition}deg)`;
    minuteHand.style.transform = `rotate(${intialMinuteHandPosition}deg)`;
    secondHand.style.transform = `rotate(${intialSecondHandPosition}deg)`;

    function timer(){
        hourHand.style.transform = `rotate(${intialHourHandPosition+=(30/3600)}deg)`;
        minuteHand.style.transform = `rotate(${intialMinuteHandPosition+=(6/60)}deg)`;
        secondHand.style.transform = `rotate(${intialSecondHandPosition+=6}deg)`;
    }
    setTimeout(()=>{secondHand.style.transition = 'transform 1s linear'
                    hourHand.style.transform = `rotate(${intialHourHandPosition+=(30/3600)}deg)`;
                    minuteHand.style.transform = `rotate(${intialMinuteHandPosition+=(6/60)}deg)`;
                    secondHand.style.transform = `rotate(${intialSecondHandPosition+=6}deg)`;
                    },0)
        
    setInterval(timer,1000)
}

    