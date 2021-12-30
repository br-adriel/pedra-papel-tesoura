function computerPlay() {
  let jogada = Math.floor(Math.random() * 3) + 1;
  switch (jogada) {
    case 1:
      return "pedra";
    case 2:
      return "papel";
    case 3:
      return "tesoura";
  }
}

function jogarPartida(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  switch (computerSelection) {
    case "pedra":
      if (playerSelection === "papel") {
        return 1;
      } else if (playerSelection === "tesoura") {
        return 2;
      } else if (playerSelection === "pedra") {
        return 0;
      } else {
        return -1;
      }
    case "papel":
      if (playerSelection === "tesoura") {
        return 1;
      } else if (playerSelection === "pedra") {
        return 2;
      } else if (playerSelection === "papel") {
        return 0;
      } else {
        return -1;
      }
    case "tesoura":
      if (playerSelection === "pedra") {
        return 1;
      } else if (playerSelection === "papel") {
        return 2;
      } else if (playerSelection === "tesoura") {
        return 0;
      } else {
        return -1;
      }
  }
}
