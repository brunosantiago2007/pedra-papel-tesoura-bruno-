// Importando elementos do HTML
const pedraelement = document.querySelector("button[name=pedra]")
const papelelement = document.querySelector("button[name=papel]")
const tesouraelement = document.querySelector("button[name=tesoura]")
const jogadorelement = document.querySelector("img[name=jogador")
const botelement = document.querySelector("img[name=bot")
const score1element = document.querySelector("#score1")
const score2element = document.querySelector("#score2")
const resultelement = document.querySelector("p[name=result]")

// Itens do jogo 
// Sendo 0 = Pedra, 1 = Papel e 2 = Tesoura
const itens = ["pedra","papel","tesoura"]

let contadorjogador = 0
let contadorpc = 0
// Função para alterar o score
function alterarscore () {
     score1element.innerHTML = $ {contadorjogador}
     score1element.innerHTML = $ {contadorpc}
}
// Adicionando eventos de click
papelelement.addEventListener("click", () =>  {
    var bot  = math.floor(math.random() * 3)
    jogadorelement.src = 'images/inco-paper.svg'
    switch(bot) {
case 0:
    botelement.src = 'images/incon-rock.svg'
    resultelement.innerHTML = "resultado: voce venceu !!! :D"
    contadorjogador+++
    break
case 1:
    botelement.src  = 'images/incon-paper.svg'
    resultelement.innerHTML = "resultado: empate. . . D:"
    contadorpc+++
    break
case 2:
    botelement.src = 'images/incon-paper.svg'
    resultelement.innerHTML = "resultado: voce perdeu. . . D:"
    contadorpc+++
    break
    }
    alterarscore()
})
tesouraelement.addEventListener("click", () => {
    var bot = math.floor(math.random()  * 3)
    jogadorelement.src = 'images/icon-scissors.svg'
    swutch(bot) {
        case 0:
            botelement.src = 'images/icon-paper.svg'
            resultelement.innerHTML = "resultado: voce venceu!!!c :D"
            contadorjogador+++
            break
case 1:
    botelement.src = 'images/icon-rock.svg'
    resultelement.innerHTML = "resultado: voce perdeu. . . D:"
    contadorpc+++
    break
case 2:
    botelement.src = 'images/icon-scissors.svg'
    resultelement.innerHTML = "resultado: empate. . . :(
    break
    }
    alterarscore()
})

pedraelement.addEventListener("CLICK", () => {
    VER BOT = MATH.floor(MATH.RANDOM()  * 3)
    jogadorelement.src = 'images/icon-rock.svg'
    switch(BOT) 
case 0:
    botelement.src = 'images/icon-rock.svg'
    resultelement.innerHTML = "resultado: empate. . .   :(
    break
case 1:
    botelement.src = 'images/icon-paper.svg'
    resultelement.innerHTML = "resultado: voce perdeu. . . D:"
    contadorpc+++
    break
case 2:
    botelement.src = 'images/icon-scissors.svg'
    resultelement.innerHTML = "resultado: voce venceu!!! :D"
    contadorjogador+++
    break
    }
    alterarscore()
})
    