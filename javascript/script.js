//The first player to go will be Captain America and will display the shield icon

//The first player will begin and click on any square

// User clicks on button under either Cap or Ironman, which will then set them as either player 1 (cap) or player 2 (ironman).
    //Based on if they are player 1 or player 2, that image will be placed in the square when they click on it.


var currentPlayer = 1;

var board = ['square1', 'square2', 'square3',
             "square4", "square5", "square6",
             "square7", "square8", "square9"];

// Switch Player Function
function switchPlayer(buttonClickedId) {
  if (buttonClickedId !== currentPlayer) {
     if (currentPlayer === 1) {
        currentPlayer = 2;
      }
      else {
        currentPlayer = 1;
      }
    }
};


//Function to check if square is available

// Show image
function showImage() {
  if (currentPlayer === 1) {
  } else if (currentPlayer === 2) {
  }
};

function checkSquareAvailability(square) {
  if (!square.innerHTML) {
    showImage();
  } else {
    return alert("This square has already been selected. Choose again.");
  }
}


function playerMove(square, location) {
checkSquareAvailability(square);
location.innerHTML = showImage();
playerClick(square);
};

var square1 = $(".topleft");
  $(square1).click(function(){
    playerMove("square1", square1);
  checkWinner();
  switchPlayer();
});

var square2 = $(".topmiddle");
  $(square2).click(function(){
    playerMove("square2", square2);
  checkWinner();
  switchPlayer();
});

var square3 = $(".topright");
  $(square3).click(function(){
    playerMove("square3", square3);
  checkWinner();
  switchPlayer();
});

var square4 = $(".middleleft");
  $(square4).click(function(){
    playerMove("square4", square4);
  checkWinner();
  switchPlayer();
});

var square5 = $(".middlemiddle");
  $(square5).click(function(){
    playerMove("square5", square5);
  checkWinner();
  switchPlayer();
});

var square6 = $(".middleright");
  $(square6).click(function(){
    playerMove("square6", square6);
  checkWinner();
  switchPlayer();
});

var square7 = $(".bottomleft");
  $(square7).click(function(){
    playerMove("square7", square7);
  checkWinner();
  switchPlayer();
});

var square8 = $(".bottommiddle");
  $(square8).click(function(){
    playerMove("square8", square8);
  checkWinner();
  switchPlayer();
});

var square9 = $(".bottomright");
  $(square9).click(function(){
    playerMove("square9", square9);
  checkWinner();
  switchPlayer();
});

//player moves
function playerClick(square){
  if (square === 'square1'){
    if (currentPlayer === 1) {
      if (board[0] === 'square1'){
        board[0] = 5
        $(".topleft").append("<img src='http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028'>");
        showImage();
    }
  } else if (currentPlayer !== 1) {
      if (board[0] === 'square1') {
        board[0] = 1
        $(".topleft").append("<img src='http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852'>");
      }
     }
  } else if (square === 'square2'){
    if (currentPlayer === 1){
      if (board[1] === 'square2') {
        board[1] = 5
        $(".topmiddle").append("<img src='http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028'>");
      }
    } else if (currentPlayer !== 1) {
      if (board[1] === 'square2') {
        board[1] = 1
        $(".topmiddle").append("<img src='http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852'>");
      }
    }
  } else if (square === 'square3'){
    if (currentPlayer === 1) {
      if (board[2] === 'square3'){
        board[2] = 5
         $(".topright").append("<img src='http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028'>");
    }
  } else if (currentPlayer !== 1) {
      if (board[2] === 'square3') {
        board[2] = 1
        $(".topright").append("<img src='http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852'>");
      }
     }
  } else if (square === 'square4') {
    if (currentPlayer === 1) {
      if (board[3] === 'square4'){
        board[3] = 5
         $(".middleleft").append("<img src='http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028'>");
      }
    } else if (currentPlayer !== 1) {
      if (board[3] === 'square4') {
        board[3] = 1
        $(".middleleft").append("<img src='http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852'>");
      }
    }
  } else if (square === 'square5') {
    if (currentPlayer === 1) {
      if (board[4] === 'square5'){
        board[4] = 5
         $(".middlemiddle").append("<img src='http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028'>");
      }
    } else if (currentPlayer !== 1) {
      if (board[4] === 'square5') {
        board[4] = 1
        $(".middlemiddle").append("<img src='http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852'>");
      }
    }
  } else if(square === 'square6') {
    if (currentPlayer === 1) {
      if (board[5] === 'square6'){
        board[5] = 5
         $(".middleright").append("<img src='http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028'>");
      }
    } else if (currentPlayer !== 1) {
      if (board[5] === 'square6') {
        board[5] = 1
        $(".middleright").append("<img src='http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852'>");
      }
    }
  } else if (square === 'square7') {
    if (currentPlayer === 1) {
      if (board[6] === 'square7'){
        board[6] = 5
         $(".bottomleft").append("<img src='http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028'>");
      }
    } else if (currentPlayer !== 1) {
      if (board[6] === 'square7') {
        board[6] = 1
        $(".bottomleft").append("<img src='http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852'>");
      }
    }
  } else if (square === 'square8') {
    if (currentPlayer === 1) {
      if (board[7] === 'square8'){
        board[7] = 5
         $(".bottommiddle").append("<img src='http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028'>");
      }
    } else if (currentPlayer !== 1) {
      if (board[7] === 'square8') {
        board[7] = 1
        $(".bottommiddle").append("<img src='http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852'>");
      }
    }
  } else if  (square === 'square9') {
    if (currentPlayer === 1) {
      if (board[8] === 'square9'){
        board[8] = 5
         $(".bottomright").append("<img src='http://vignette2.wikia.nocookie.net/disney/images/3/36/Captain_America_Shield.png/revision/latest?cb=20140922001028'>");
      }
    } else if (currentPlayer !== 1) {
      if (board[8] = 'square9') {
        board[8] = 1
        $(".bottomright").append("<img src='http://vignette4.wikia.nocookie.net/marvel-cinematic-universe/images/1/12/Era-Ironman.png/revision/latest?cb=20120621162852'>");
      }
    }
  }
};

// Determine winner

function checkWinner() {
  if (board[0] + board[1] + board[2] === 15){
    alert('PLAYER 1 WINS!');
  }
  else if (board[0] + board[3] + board[6] === 15) {
    alert('PLAYER 1 WINS!');
  }
  else if (board[1] + board[4] + board[7] === 15){
    alert('PLAYER 1 WINS!');
  }
  else if (board[2] + board[5] + board[8] === 15){
    alert('PLAYER 1 WINS!');
  }
  else if (board[3] + board[4] + board[5] === 15){
    alert('PLAYER 1 WINS!');
  }
  else if (board[6] + board[4] + board[2] === 15){
    alert('PLAYER 1 WINS!');
  }
  else if (board[6] + board[7] + board[8] === 15){
    alert('PLAYER 1 WINS!');
  }
  else if (board[0] + board[4] + board[8] === 15){
    alert('PLAYER 1 WINS!');
  }
  else if (board[0] + board[1] + board[2] === 3){
    alert('PLAYER 2 WINS!');
    console.log("winner");
  }
  else if (board[0] + board[3] + board[6] === 3) {
    alert('PLAYER 2 WINS!');
  }
  else if (board[1] + board[4] + board[7] === 3){
    alert('PLAYER 2 WINS!');
  }
  else if (board[2] + board[5] + board[8] === 3){
    alert('PLAYER 2 WINS!');
  }
  else if (board[3] + board[4] + board[5] === 3){
    alert('PLAYER 2 WINS!');
  }
  else if (board[6] + board[4] + board[2] === 3){
    alert('PLAYER 2 WINS!');
  }
  else if (board[6] + board[7] + board[8] === 3){
    alert('PLAYER 2 WINS!');
  }
  else if (board[0] + board[4] + board[8] === 3){
    alert('PLAYER 2 WINS!');
  }
  else if (board[0] + board[1] + board[2] + board[3] + board[4] + board[5] + board[6] + board[7]+ board[8] === 29) {
    alert('The game was a tie. Try again!');
  }
};



//Reset Board

function resetBoard() {
  $("#button1").click(function(){
    $("td img").remove();
    board = ['square1', 'square2', 'square3',
             "square4", "square5", "square6",
             "square7", "square8", "square9"];
    currentPlayer = 1;
  })
}
resetBoard();

