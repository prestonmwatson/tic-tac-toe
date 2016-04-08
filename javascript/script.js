

// function playerDisplay() {

// playerDisplay();


//       //   if user chooses Cap
//     //       users icon will be cap
//       //   if user chooses Ironman
//     //       users icon will be ironman

// // User Clicks on square and X or O shows up
//   // if user clicks on square,
//   //    O shows up on square

// User clicks on button under either Cap or Ironman, which will then set them as either player 1 (cap) or player 2 (ironman).
    //Based on if they are player 1 or player 2, that image will be placed in the square when they click on it.



var currentPlayer = 1;

function switchPlayer(buttonClickedId) {
  if (buttonClickedId !== currentPlayer) {
     if (currentPlayer === 1) {
        currentPlayer = 2;
      }
      else {
        currentPlayer = 1;
      }
    }
}

//User Moves

$(".topleft").click(function(){
  if (currentPlayer == 1) {
    $('.topleft').prepend('<img id="Captain_America_Shield" src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
  } else if (currentPlayer == 2) {
    $('.topleft').prepend('<img id=Ironman_logo" src="http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852" />')
  }
  switchPlayer();
});

$(".topmiddle").click(function(){
  if (currentPlayer == 1) {
    $('.topmiddle').prepend('<img id="Captain_America_Shield" src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
  } else if (currentPlayer == 2) {
    $('.topmiddle').prepend('<img id=Ironman_logo" src="http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852" />')
  }
   switchPlayer();
});


  $(".topright").click(function(){
    if (currentPlayer == 1) {
     $('.topright').prepend('<img id="Captain_America_Shield" src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
    } else if (currentPlayer == 2) {
     $('.topright').prepend('<img id=Ironman_logo" src="http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852" />')
  }
   switchPlayer();
});

  $(".middleleft").click(function(){
    if (currentPlayer == 1) {
     $('.middleleft').prepend('<img id="Captain_America_Shield" src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
    } else if (currentPlayer == 2) {
     $('.middleleft').prepend('<img id=Ironman_logo" src="http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852" />')
  }
   switchPlayer();
});

  $(".middlemiddle").click(function(){
    if (currentPlayer == 1) {
     $('.middlemiddle').prepend('<img id="Captain_America_Shield" src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
    } else if (currentPlayer == 2) {
     $('.middlemiddle').prepend('<img id=Ironman_logo" src="http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852" />')
  }
   switchPlayer();
});

  $(".middleright").click(function(){
    if (currentPlayer == 1) {
     $('.middleright').prepend('<img id="Captain_America_Shield" src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
    } else if (currentPlayer == 2) {
     $('.middleright').prepend('<img id=Ironman_logo" src="http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852" />')
  }
   switchPlayer();
});

  $(".bottomleft").click(function(){
    if (currentPlayer == 1) {
     $('.bottomleft').prepend('<img id="Captain_America_Shield" src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
    } else if (currentPlayer == 2) {
     $('.bottomleft').prepend('<img id=Ironman_logo" src="http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852" />')
  }
   switchPlayer();
});

    $(".bottommiddle").click(function(){
    if (currentPlayer == 1) {
     $('.bottommiddle').prepend('<img id="Captain_America_Shield" src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
    } else if (currentPlayer == 2) {
     $('.bottommiddle').prepend('<img id=Ironman_logo" src="http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852" />')
  }
   switchPlayer();
});

  $(".bottomright").click(function(){
    if (currentPlayer == 1) {
     $('.bottomright').prepend('<img id="Captain_America_Shield" src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
    } else if (currentPlayer == 2) {
     $('.bottomright').prepend('<img id=Ironman_logo" src="http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852" />')
  }
  switchPlayer();
});



// function winner () {
var board = [null, null, null,
             null, null, null,
             null, null, null];

function checkWinner() {
  if (board[0]+ board[1] + board[2] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
  else if (board[0]+ board[3] + board[6] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
  else if (board[1]+ board[4] + board[7] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
  else if (board[2]+ board[5] + board[8] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
  else if (board[3]+ board[4] + board[5] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
  else if (board[6]+ board[4] + board[2] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
  else if (board[0]+ board[1] + board[2] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
  else if (board[0]+ board[1] + board[2] === 15){
    console.log('User WIN!');
    playerScore += 1;
    updatePlayerScore();
}

// }


// function firstToFive() {

// }
// // // User has 3 objects in a row and wins
// //   // if user has three Os in a row

//   // arrays of groups to determine who has won
//     // 8 groups of 3 squares to determine who has won

//     /* Act on the event */
//   // });
// //   //   user has won
// // // user clicks on a space taken and cant add their objects
// //     // if user clicks on square with an x or o



// function resetGame () {

// }


// // // user clicks button to start new game
// //     if user clicks on reset button, begins new game

// $("#button1").click(function() {
//     $('.bottomright').remove('img src="http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028" />')
// });

