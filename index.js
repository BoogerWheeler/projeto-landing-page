var SetaParaDireita = window.document.getElementById("seta-direita") 
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var SetaParaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita() {
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    SetaParaEsquerda.style ="display: flex; margin-top:60px"
    SetaParaDireita.style = "display: none"

}

function RolarParaEsquerda(){
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    SetaParaEsquerda.style ="display: none"
    SetaParaDireita.style = "display: Flex"
} 