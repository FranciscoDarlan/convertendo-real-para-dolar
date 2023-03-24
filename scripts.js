//primeira parte vamos fazer 1 coisa de cada vez .. vamos pegar o botão;

const button = document.getElementById('button-convert') // aqui vou la html pegar meu botao pelo getElementById

const dolar = 5.2 // preciso dar um valor 

const convertValues = () => { //criei essa funçao com aero funtions pela setinha, todo vez que for clicado vai aparecer na tela
    
    const inputReais = document.getElementById("value-dinheiro").value  // preciso colocar .value no final, senao ele pega o placeholder do html
// depois de pegar meu valor no input preciso fazer os calculos


    inputReais / dolar // se quiser enxergar preciso colocar dentro do console.log


//      console.log(inputReais)   // consigo enxerga o valor da minha variavel (input)
 //   console.log('cliqui no botao') // consigo enxergar na tela o que esta acontecendo 
}

button.addEventListener('click', convertValues) // ouvidor de eventos , preciso criar uma funçao antes que faça o que eu quero