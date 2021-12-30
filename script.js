let computerScore = 0;
let playerScore = 0;
const pontosCompNode = document.getElementById("pontosComp");
const pontosJogNode = document.getElementById("pontosJog");
const statusNode = document.getElementById("status");
const btns = document.querySelectorAll(".playButtons button");
const vitoriaNode = document.getElementById("dispVitoria");
const vitoriaTextNode = document.querySelector("#dispVitoria .text");
const btnRecomecarNode = document.getElementById("recomecar");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    jogarPartida(e.originalTarget.id, computerPlay());
  });
});

btnRecomecarNode.addEventListener("click", reiniciarPartida);

function reiniciarPartida() {
  btns.forEach((btn) => {
    btn.disabled = false;
  });
  vitoriaNode.style.display = "none";
  zerarPontos();
  atualizarPontuacao();
}

function atualizarPontuacao() {
  pontosCompNode.innerText = `${computerScore}`;
  pontosJogNode.innerText = `${playerScore}`;
}

function zerarPontos() {
  computerScore = 0;
  playerScore = 0;
  statusNode.innerText = "Nenhuma rodada foi jogada ainda";
  atualizarPontuacao();
}

function verificarVitoria() {
  if (computerScore === 5 || playerScore === 5) {
    btns.forEach((btn) => {
      btn.disabled = true;
    });
    if (computerScore === 5) {
      vitoriaTextNode.innerText = "Você perdeu!";
    } else {
      vitoriaTextNode.innerText = "Você ganhou!";
    }
    vitoriaNode.style.display = "flex";
  }
}

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

function getStatusText(playerMove, computerMove) {
  if (playerMove === computerMove) {
    return `Ambos jogaram ${playerMove}. Empate!`;
  }
  return `Você jogou ${playerMove} e o computador jogou ${computerMove}.`;
}

function jogarPartida(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  switch (computerSelection) {
    case "pedra":
      if (playerSelection === "papel") {
        statusNode.innerText = getStatusText(
          playerSelection,
          computerSelection
        );
        playerScore++;
      } else if (playerSelection === "tesoura") {
        statusNode.innerText = getStatusText(
          playerSelection,
          computerSelection
        );
        computerScore++;
      } else if (playerSelection === "pedra") {
        statusNode.innerText = getStatusText(
          playerSelection,
          computerSelection
        );
      } else {
        statusNode.innerText = "Você escolheu uma opção inválida";
      }
      break;
    case "papel":
      if (playerSelection === "tesoura") {
        statusNode.innerText = getStatusText(
          playerSelection,
          computerSelection
        );
        playerScore++;
      } else if (playerSelection === "pedra") {
        statusNode.innerText = getStatusText(
          playerSelection,
          computerSelection
        );
        computerScore++;
      } else if (playerSelection === "papel") {
        statusNode.innerText = getStatusText(
          playerSelection,
          computerSelection
        );
      } else {
        statusNode.innerText = "Você escolheu uma opção inválida";
      }
      break;
    case "tesoura":
      if (playerSelection === "pedra") {
        statusNode.innerText = getStatusText(
          playerSelection,
          computerSelection
        );
        playerScore++;
      } else if (playerSelection === "papel") {
        statusNode.innerText = getStatusText(
          playerSelection,
          computerSelection
        );
        computerScore++;
      } else if (playerSelection === "tesoura") {
        statusNode.innerText = getStatusText(
          playerSelection,
          computerSelection
        );
      } else {
        statusNode.innerText = "Você escolheu uma opção inválida";
      }
      break;
  }
  atualizarPontuacao();
  verificarVitoria();
}
