/*Neste exercício, você criará um temporizador de contagem regressiva que aceita uma data futura e conta o tempo restante até essa data. O temporizador exibirá os dias, horas, minutos e segundos restantes e será atualizado a cada segundo.

Passos:

 1. Defina uma função para calcular o tempo restante até uma data futura:

 calcularTempoRestante(dataFutura)

 2. Defina uma função para atualizar o temporizador na tela:

 atualizarTemporizador()

 3. Use setInterval para atualizar o temporizador a cada segundo.

 4. Manipule o objeto Date para calcular a diferença entre a data atual e a data futura.*/

function calcularTempoRestante(dataFutura) {
    const agora = new Date();
    const diferenca = dataFutura - agora;
    const segundos = Math.floor((diferenca / 1000) % 60);
    const minutos = Math.floor((diferenca / 1000 / 60) % 60);
    const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    return { dias, horas, minutos, segundos };
}
function atualizarTemporizador(dataFutura) {
    const tempoRestante = calcularTempoRestante(dataFutura);
    console.log(`Faltam ${tempoRestante.dias} dias, ${tempoRestante.horas} horas, ${tempoRestante.minutos} minutos e ${tempoRestante.segundos} segundos.`);
}
const dataFutura = new Date('2025-12-25T00:00:00');
setInterval(() => atualizarTemporizador(dataFutura), 10000);

