//primeira parte vamos fazer 1 coisa de cada vez .. vamos pegar o botão;

const button = document.getElementById('button-convert') // aqui vou la html pegar meu botao pelo getElementById


//const moedas = document.getElementById("moedas")
//const optionDolar = document.getElementById("option-dolar")

const dolar = 5.25 // preciso dar um valor 
//const euro = 5.66 // valor euro

const convertValues = () => { //criei essa funçao com aero funtions pela setinha, todo vez que for clicado vai aparecer na tela

    const inputReais = document.getElementById("value-dinheiro").value  // preciso colocar .value no final, senao ele pega o placeholder do html
    // depois de pegar meu valor no input preciso fazer os calculos

    const trocaTextReal = document.getElementById("text-real") // criando o caminho para mexer nesse elemento
    const trcaTextDolar = document.getElementById("text-dolar") // criando o caminho para mexer nesse elemento

    trocaTextReal.innerHTML = inputReais //.innnerHTML troca o texto na tela 
    trcaTextDolar.innerHTML = inputReais / dolar //.innnerHTML troca o texto na tela

    inputReais / dolar // conta que o JS vai converter o dinheiro

    /*
    if {moedas = optionDolar 
        console.log(inputReais / dolar) // se quiser enxergar preciso colocar dentro do console.log
    }else {
     console.log(inputReais / euro)
    }*/

    //  console.log(inputReais)   // consigo enxerga o valor da minha variavel (input)
    //   console.log('cliqui no botao') // consigo enxergar na tela o que esta acontecendo 

}

button.addEventListener('click', convertValues) // ouvidor de eventos , preciso criar uma funçao antes que faça o que eu quero