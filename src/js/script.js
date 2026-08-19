// DEFINE O OBJETO COM OS RESULTADOS REAIS (BANCO DE DADOS)
const placarOficial ={
    1:{time1:3, time2:0},
    2:{time1:2, time2:2},
}

// let numero = true;
// console.log(typeof numero);
// console.log(typeof placarOficial);

//FUNÇÃO SALVAR PALPITE

function salvarPalpite(nomeJogo,id){
    
    //CAPTURAR OS ELEMENTOS DO DOM
    const input1 = document.getElementById(`time1-${id}`);
    const input2 = document.getElementById(`time2-${id}`);

    //VALIDAÇÃO DOS CAMPOS 
    if(input1.value === "" || input2.value === ""){
        alert("Precisa preencher todos os campos!")
        return
    }
    // CONVERTE STR PARA INT
    const p1 = parseInt(input1.value);
    const p2 = parseInt(input2.value);

    // Recupera o placar oficial correspondente ao jogo atual
    const real = placarOficial[id];
    // Inicializa a variável de status do palpite vazia
    let status = "";

    // Verifica se o palpite foi exatamente igual ao placar real
    if (p1 === real.time1 && p2 === real.time2) {
        status = " ACERTOU EM CHEIO!"; // Feedback de acerto total
    // Caso contrário, verifica se acertou quem venceu
    } else if ((p1 > p2 && real.time1 > real.time2) || (p1 < p2 && real.time1 < real.time2) || (p1 === p2 && real.time1 === real.time2)) {
        status = " Acertou o vencedor"; // Feedback de acerto parcial
    } else {
        status = " Errou, treinar mais"; // Feedback de erro
    }

        // Define a cor de fundo com base no status do palpite
    let corFundo = "";
    if (p1 === real.time1 && p2 === real.time2) {
        corFundo = "bg-success"; // Verde claro para acerto em cheio
    } else if ((p1 > p2 && real.time1 > real.time2) || (p1 < p2 && real.time1 < real.time2) || (p1 === p2 && real.time1 === real.time2)) {
        corFundo = "bg-warning"; // Amarelo claro para acertar o vencedor
    } else {
        corFundo = "bg-danger";  // Vermelho claro para erro
    }

      // Adiciona na lista incluindo a classe de cor de fundo
    const lista = document.getElementById('lista-resultados');
    lista.innerHTML += `<li class="list-group-item ${corFundo}">
        ${nomeJogo}: Seu palpite ${p1}x${p2} - <strong>${status}</strong>
    </li>`;
    // Limpa os campos
    input1.value = "";
    input2.value = "";
}
