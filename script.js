
    
    const resultado = document.querySelector('.resultado')
    const pontuacaoHumana = document.querySelector('.humano-pontuacao')
    const pontuacaoMaquina = document.querySelector('.machine-pontuacao')
    const escolhaHumana = document.querySelector('.escolha-humano')
    const escolhaMachine = document.querySelector('.escolha-machine')
    let numeroDoHumano = 0
    let numeroDaMaquina = 0
    
    const humanoEscolhendo = (escolhaUmana) => {
        const escolhaMaquina = escolhaDaMaquina()
        jogar(escolhaUmana, escolhaMaquina)
    
        escolhaHumana.innerHTML = (': ' + escolhaUmana)
        escolhaMachine.innerHTML = (': ' + escolhaMaquina )
    
        
        
    }
    const escolhaDaMaquina = () => {
        const escolhas = ['pedra', 'papel', 'tesoura']
        const numeroAleatorio = Math.floor(Math.random() * 3)
        return escolhas[numeroAleatorio]
    }
    const jogar = (humano, maquina) => {
        console.log('Humano: ' + humano + ' Maquina: ' + maquina);
        if (humano === maquina) {
            resultado.innerHTML = 'Empate'
        } else if (
            (humano == 'pedra' && maquina == 'tesoura') || (humano == 'tesoura' && maquina == 'papel') || (humano == 'papel' && maquina == 'pedra')) {
                numeroDoHumano++
                pontuacaoHumana.innerHTML = numeroDoHumano
                resultado.innerHTML = 'Humano venceu'
            } else {
                numeroDaMaquina++
                pontuacaoMaquina.innerHTML = numeroDaMaquina
                resultado.innerHTML = 'Maquina Wins'
            }
        }


// const resultado = document.querySelector('.resultado');
// const pontuacaoHumana = document.querySelector('.humano-pontuacao');
// const pontuacaoMaquina = document.querySelector('.machine-pontuacao');
// const escolhaHumana = document.querySelector('.escolha-humano');
// const escolhaMachine = document.querySelector('.escolha-machine');
// let numeroDoHumano = 0;
// let numeroDaMaquina = 0;

// const humanoEscolhendo = (escolhaUmana) => {
//     const escolhaMaquina = escolhaDaMaquina(); // Captura a escolha da máquina
//     jogar(escolhaUmana, escolhaMaquina); // Chama a função jogar com as escolhas
//     escolhaHumana.innerHTML = ': ' + escolhaUmana; // Exibe a escolha do humano
//     escolhaMachine.innerHTML = ': ' + escolhaMaquina; // Exibe a escolha da máquina
// };

// const escolhaDaMaquina = () => {
//     const escolhas = ['pedra', 'papel', 'tesoura'];
//     const numeroAleatorio = Math.floor(Math.random() * 3);
//     return escolhas[numeroAleatorio]; // Retorna a escolha aleatória
// };

// const jogar = (humano, maquina) => {
//     console.log('Humano: ' + humano + ' Máquina: ' + maquina); // Exibe as escolhas no console
//     if (humano === maquina) {
//         resultado.innerHTML = 'Empate'; // Se as escolhas forem iguais
//     } else if (
//         (humano === 'pedra' && maquina === 'tesoura') || 
//         (humano === 'tesoura' && maquina === 'papel') || 
//         (humano === 'papel' && maquina === 'pedra')
//     ) {
//         numeroDoHumano++; // Incrementa a pontuação do humano
//         pontuacaoHumana.innerHTML = numeroDoHumano; // Atualiza a pontuação do humano
//         resultado.innerHTML = 'Humano venceu'; // Mensagem de vitória do humano
//     } else {
//         numeroDaMaquina++; // Incrementa a pontuação da máquina
//         pontuacaoMaquina.innerHTML = numeroDaMaquina; // Atualiza a pontuação da máquina
//         resultado.innerHTML = 'Máquina venceu'; // Mensagem de vitória da máquina
//     }
// };