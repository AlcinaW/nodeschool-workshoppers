//Nodeschool robot

//Programming Arduino robot with JavaScript/johnny-five.

//j5 object that has methods, require the npm module in
//run the file in terminal, stop with CTRL-C x2
//items: chassis, L9110 Dual Motor Driver, Uno board, breadboard, USB cord
//can use web sockets (socket.io) to have bot controlled from the browser
//For Windows, may have to dl Visual Studio for computer to recognize board
var j5 =  require('johnny-five');
//new boards object
var board = new j5.Board();

//equivalent to document "ready" -> board ready
board.on('ready', function() {
  console.log('Beep boop :3');
  //pass in object
  var motorOne = new j5.Motor({
    pins: { //pins obj
      pwm: 5,
      dir: 4
    },
    invertPWM: true
  });

  var motorTwo =  new j5.Motor({
    pins: {
      pwm: 3, //use other pins
      dir: 2
    }
    invertPWM: true
  });

  //write in function run more than one motor
  function forward(){
    motorOne.forward(255); //255 is max speed, <50 won't go
    motorTwo.forward(255);
  }

  function stop(){
    motorOne.stop();
    motorTwo.stop();
  }

  //board has own methods as well
  //example: when start, timed delay, forward, then stop
  forward();
  board.wait(2000, function(){
    stop();
  });

  //can create listeners on the board itself

  //.forward(255);
  //.reverse(255);
  //.stop();
  //.start();

  this.repl.inject({
    forward: forward, //add in directions
    stop: stop,
    motorOne: motorOne,
    motorTwo: motorTwo //inject second motor
  });
});
