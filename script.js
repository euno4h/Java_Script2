function alterarCirculo(){
    const circulo = document.getElementById('circulo');

    const corAleatoria = '#' + math.floor(math.random()*16777215).toString(16);
    
    const novoTamanho = math.floor(math.random()*(200 - 50 + 1))+ 50;

    
    circulo.style.backgrondColor = corAleatoria;
    circulo.style.width = novoTamanho + 'px';
    circulo.style.height = novoTamanho + 'px';
}