const botaoVermelho = document.getElementById('btnRed');
const botaoVerde = document.getElementById('btnGreen');
const botaoHide = document.getElementById("btnHide");
const titulo = document.querySelector("#titulo");
const botaoTema = document.querySelector("#btnTema");

function alterarCor(cor) {
    document.body.style.backgroundColor = cor
}

botaoVermelho.addEventListener('click', () => alterarCor("red"));
botaoVerde.addEventListener('click', () => alterarCor("green"));


botaoHide.addEventListener('click', () => {
    //titulo.classList.add('invisivel')
    titulo.classList.toggle('invisivel')

    if (botaoHide.textContent == "Esconder titulo") {
        botaoHide.textContent == "Mostrar titulo"
    }
    else {
        botaoHide.textContent = "Esconder titulo"
    }
    
});

botaoTema.addEventListener('click', () => {
    document.body.classList.toggle('temaEscuro')   
});
