
// --- Contador de tempo ---
const dataInicial = new Date("2023-06-12T20:00:00"); // Exemplo de data: personalize

function atualizarContador() {
  const agora = new Date();
  const diff = agora - dataInicial;

  const segundosTotais = Math.floor(diff / 1000);
  const dias = Math.floor(segundosTotais / (60 * 60 * 24));
  const horas = Math.floor((segundosTotais % (60 * 60 * 24)) / (60 * 60));
  const minutos = Math.floor((segundosTotais % (60 * 60)) / 60);
  const segundos = segundosTotais % 60;

  document.getElementById("dias").textContent = dias;
  document.getElementById("horas").textContent = horas;
  document.getElementById("minutos").textContent = minutos;
  document.getElementById("segundos").textContent = segundos;
}

setInterval(atualizarContador, 1000);

// --- Mensagem Secreta ---
function mostrarMensagem() {
  const mensagem = document.getElementById("mensagemOculta");
  if (mensagem.style.display === "none") {
    mensagem.style.display = "block";
  } else {
    mensagem.style.display = "none";
  }
}
