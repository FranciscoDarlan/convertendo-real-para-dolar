const button = document.getElementById('button-convert') // aqui vou la html pegar meu botao pelo getElementById

const dolar = 5.25 // preciso dar um valor 
const euro = 5.66 // valor euro

trocaMoedas = () => {
    const moedas = document.getElementById('moedas').value
    const optionDolar = document.getElementById('option-dolar').value
    const optionEuro = document.getElementById('option-euro').value

    const paragrafoNomeMoeda = document.getElementById('paragrafo-dolar')

    if (moedas === optionEuro) {
        (paragrafoNomeMoeda.innerHTML) = moedas
    }

    if (moedas === optionDolar) {
        paragrafoNomeMoeda.innerHTML = moedas
    }
}

/* {TENTANDO TROCAR AS BANDEIRAS}

trocaBandeiras = () => {
     const imgEua = document.getElementById('img-EUA')

    const imgTroca = document.getElementById('paragrafo-dolar')

    if (img === ) {
        imgTroca.innerHTML = img
    }

    if (img === ) {
        imgTroca.innerHTML = img
    }
}*/

const convertValues = () => { //criei essa funçao com aero funtions pela setinha, todo vez que for clicado vai aparecer na tela

    const inputReais = document.getElementById("value-dinheiro").value  // preciso colocar .value no final, senao ele pega o placeholder do html
    // depois de pegar meu valor no input preciso fazer os calculos

    const trocaTextReal = document.getElementById("text-real") // criando o caminho para mexer nesse elemento
    const trcaTextDolar = document.getElementById("text-dolar") // criando o caminho para mexer nesse elemento


    const date = fetch("https://economia.awesomeapi.comm.br/last/USD-BRL,EUA-BRL,BTC-BRL").then(response => response.json())


    //trocaTextReal.innerHTML = inputReais --> innnerHTML troca o texto na tela 

    trocaTextReal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais);


    // trcaTextDolar.innerHTML = inputReais / dolar--> innnerHTML troca o texto na tela ja com a conta feita

    trcaTextDolar.innerHTML = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(inputReais / dolar);

    //  console.log(inputReais)   // consigo enxerga o valor da minha variavel (input)
    //   console.log('cliqui no botao') // consigo enxergar na tela o que esta acontecendo 
}

moedas.addEventListener('change', trocaMoedas)
button.addEventListener('click', convertValues) // ouvidor de eventos , preciso criar uma funçao antes que faça o que eu quero
