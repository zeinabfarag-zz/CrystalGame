var yourValue = Math.floor(Math.random() * 102) + 19;
var redValue = Math.floor(Math.random() * 12) + 1;
var blueValue = Math.floor(Math.random() * 12) + 1;
var yellowValue = Math.floor(Math.random() * 12) + 1;
var greenValue = Math.floor(Math.random() * 12) + 1;
var totalValue = 0;
var winCounter = 0;
var lossCounter = 0;

$("#yourvalue").html(yourValue);

function resetGame() {
  yourValue = Math.floor(Math.random() * 102) + 19;
  redValue = Math.floor(Math.random() * 12) + 1;
  blueValue = Math.floor(Math.random() * 12) + 1;
  yellowValue = Math.floor(Math.random() * 12) + 1;
  greenValue = Math.floor(Math.random() * 12) + 1;
  totalValue = 0;

  $("#yourvalue").html(yourValue);
  $("#totalscore").html(totalValue);
}

$("#red").on("click", function() {
  totalValue += redValue;
  $("#totalscore").html(totalValue);
  winLose();
});
$("#blue").on("click", function() {
  totalValue += blueValue;
  $("#totalscore").html(totalValue);
  winLose();
});
$("#yellow").on("click", function() {
  totalValue += yellowValue;
  $("#totalscore").html(totalValue);
  winLose();
});
$("#green").on("click", function() {
  totalValue += greenValue;
  $("#totalscore").html(totalValue);
  winLose();
});

function winLose() {
  $("html, body").animate({ scrollTop: $(document).height() }, "slow");

  if (yourValue === totalValue) {
    $("#message").html("You Win!");
    winCounter++;
    $("#wins").html(winCounter);
    resetGame();
  }

  if (totalValue > yourValue) {
    $("#message").html("You Lost!");
    lossCounter++;
    $("#losses").html(lossCounter);
    resetGame();
  }
}
