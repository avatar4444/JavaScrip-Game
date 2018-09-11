 window.addEventListener("load",function() {
      
      //constants
      var GAME_WIDTH = 640;
      var GAME_HEIGHT = 360;

      //keep the game going
      var gameLive = true;

      //create enemies
      var enemies = [
        {
          x: 100, //x coordinate
          y: 100, //y coordinate
          speedY: 2, //speed in Y
          w: 40, //width
          h: 40 //heght
        },
        {
          x: 200,
          y: 0,
          speedY: 2,
          w: 40,
          h: 40
        },
        {
          x: 330,
          y: 100,
          speedY: 3,
          w: 40,
          h: 40
        },
        {
          x: 450,
          y: 100,
          speedY: 5,
          w: 40,
          h: 40
        }
      ];

      //create the player object
      var player = {
        x: 10,
        y: 160,
        speedX: 2.5,
        isMoving: 0,
        w: 40,
        h: 40
      };

      //the goal object
      var goal = {
        x: 580,
        y: 160,
        w: 50,
        h: 36
      }

     
    });