
(function updateClock() {
    let now = new Date(); //current time.
    let sec = now.getSeconds()
    let min = now.getMinutes()
    let hrs = now.getHours() % 12 // 24 hour formate plus (+) minutes elapse

    let secondHandAngle = sec * 6   //  6 degree per second
    let minunteHandAngle = min * 6   //  6 degree per second
    let hourHandAngle = hrs * 30     // 30 degree per second

    let secondHand = document.querySelector("#seconds");
    let minuteHand = document.querySelector("#minutes");
    let hourHand = document.querySelector("#hours");

       


       //Rotate the SVG element about the center
    secondHand.setAttribute ( "transform",   `rotate(${secondHandAngle},244, 251 )`) ;
    minuteHand.setAttribute ("transform" ,  `rotate(${minunteHandAngle},244, 251 )` );
    hourHand.setAttribute("transform", `rotate(${hourHandAngle},244, 251 )`) ;
       


      // play the tick sound
    let tick = new Audio("./media/tick.mp3");
   // tick.play();  // play the audio
   // tick.currentTime = 0; //rewinding the audio to start
      

     //update every second
    setTimeout(updateClock,1000);

})()