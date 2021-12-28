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

function jogar() {
  let playerScore = 0;
  let computerScore = 0;
  let result = 0;
  for (let i = 0; i < 5; i++) {
    let escolhaJog = prompt("Escolha pedra, papel ou tesoura: ");
    let escolhaComp = computerPlay();
    result = jogarPartida(escolhaJog, escolhaComp);

    console.log(` `);
    console.log(`Você jogou ${escolhaJog}`);
    console.log(`O computador jogou ${escolhaComp}`);

    switch (result) {
      case 1:
        playerScore++;
        console.log("Você ganhou!");
        break;
      case 2:
        computerScore++;
        console.log("Você perdeu!");
        break;
      case 0:
        console.log("Empate.");
        break;
      default:
        console.log("Escolha inválida");
    }
    console.log(`PLACAR`);
    console.log(`Você: ${playerScore}`);
    console.log(`Computador: ${computerScore}`);
  }
}

jogar();
