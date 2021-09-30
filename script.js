/*Dicas

Você precisa fazer o jogador clicar duas vezes para cada 
movimento: primeiro para selecionar a torre de origem, e 
depois para selecionar a torre de destino. 

Use uma variável para registrar qual modo o jogador está.

Adicione um handler de clique em cada uma das três torres. 
Use event.currentTarget dentro do handler de evento para determinar 
qual torre foi clicada.

Use a propriedade DOM childElementCount para saber quantos discos estão em uma torre.

Use a propriedade DOM lastElementChild para saber qual é o disco no topo da torre.

Use o método DOM appendChild() para adicionar um disco a uma torre 
(você já usou este método várias vezes em tarefas anteriores). 
Observe que quando você usa appendChild em um elemento que já tem um pai,
 ele é automaticamente removido do pai anterior e adicionado no novo.

-> Use a propriedade Element.clientWidth para pegar o tamanho dos discos.*/

const argolas = document.querySelectorAll('.argola')

const dropzones = document.querySelectorAll('.dropzone')

let dropzoneFirst = document.getElementById("dropzone-1")
let dropzoneSecond = document.getElementById("dropzone-2")
let dropzoneThird = document.getElementById("dropzone-3")


argolas.forEach(argola => {
    argola.addEventListener('dragstart', dragstart)
    argola.addEventListener('dragend', dragend)
})

function dragstart() {
    this.classList.add('arrastando')
}

function dragend() {
    this.classList.remove('arrastando')
}


dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', dragover)
})


function dragover() {
    const argolaOver = document.querySelector('.arrastando')
    console.log (argolaOver)
    console.log (this.children.length)
    if (this.children.length === 0) {
        this.appendChild(argolaOver)
    } if (argolaOver.clientWidth < this.children[this.children.length -1].clientWidth){
        this.appendChild(argolaOver)
    }

    let lastElement = [dropzoneFirst.lastElementChild, dropzoneSecond.lastElementChild, dropzoneThird.lastElementChild]
    let firsElement = [dropzoneFirst.firstElementChild, dropzoneSecond.firstElementChild, dropzoneThird.firstElementChild]

    for (let i = 0; i < lastElement.length; i++){
        let resul = 'Você venceu!'
        if (lastElement[i]===argola3 & firsElement[i]===argola1){
            console.log(resul) 
    }
}
}

console.log(dropzoneFirst)

