// 🌍 Calculadora de impacto sustentável
function calcularImpacto() {
  const area = parseFloat(document.getElementById("area").value);
  const cultivo = document.getElementById("cultivo").value;

  if (!area) {
    document.getElementById("resultado").innerText = "Digite a área corretamente.";
    return;
  }

  let impactoBase;

  switch (cultivo) {
    case "milho":
      impactoBase = 120;
      break;
    case "soja":
      impactoBase = 150;
      break;
    case "horta":
      impactoBase = 40;
      break;
  }

  const resultado = area * impactoBase;

  document.getElementById("resultado").innerHTML =
    `🌱 Impacto estimado: <strong>${resultado.toFixed(2)} kg CO₂</strong>`;
}


// 🌾 Planejador de plantio
function adicionarPlanta() {
  const planta = document.getElementById("planta").value;

  if (!planta) return;

  const li = document.createElement("li");
  li.innerText = "🌿 " + planta;

  document.getElementById("listaPlantio").appendChild(li);

  document.getElementById("planta").value = "";
}


// 💧 Timer de irrigação
let interval;

function iniciarTimer() {
  const minutos = parseInt(document.getElementById("tempo").value);

  if (!minutos) return;

  let totalSegundos = minutos * 60;

  clearInterval(interval);

  interval = setInterval(() => {
    const min = Math.floor(totalSegundos / 60);
    const seg = totalSegundos % 60;

    document.getElementById("timerDisplay").innerText =
      `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;

    totalSegundos--;

    if (totalSegundos < 0) {
      clearInterval(interval);
      alert("💧 Tempo de irrigação finalizado!");
    }
  }, 1000);
}
