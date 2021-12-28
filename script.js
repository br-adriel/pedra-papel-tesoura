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
