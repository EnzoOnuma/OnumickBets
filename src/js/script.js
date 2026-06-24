// DEFINE O OBJETO COM OS RESULTADOS REAIS (BANCO DE DADOS)
const placarOficial ={
    1:{time1:2, time2:1},
    2:{time1:3, time2:0},
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
}