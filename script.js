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

<<<<<<< Updated upstream
=======
let dropzoneFirst = document.getElementById("dropzone-1")
let dropzoneSecond = document.getElementById("dropzone-2")
let dropzoneThird = document.getElementById("dropzone-3")



>>>>>>> Stashed changes
argolas.forEach(argola => {
    argola.addEventListener('dragstart', dragstart)
    argola.addEventListener('drag', drag)
    argola.addEventListener('dragend', dragend)
})

function dragstart() {
    //console.log('Argola: Start dragging ')

    this.classList.add('is-dragging')
}
function drag() {
    //console.log('Argola: is dragging ')
}
function dragend() {
    //console.log('Argola: Stop dragging ')

    this.classList.remove('is-dragging')
}


dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragenter', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    
}
    let drop1 = dropzoneFirst.children[dropzoneFirst.children.length -1]
    let drop2 = dropzoneSecond.children[dropzoneSecond.children.length -1]
    let drop3 = dropzoneThird.children[dropzoneThird.children.length -1]

function dragover() {
    const argolaOver = document.querySelector('.is-dragging')
<<<<<<< Updated upstream
    this.appendChild(argolaOver)

}

function dragleave() {
=======
>>>>>>> Stashed changes
    

<<<<<<< Updated upstream
function drop() {
    
}
=======
    console.log(this.appendChild(argolaOver).clientWidth)
    // console.log(argolaOver.clientWidth)
    // console.log(dropzoneSecond[dropzoneSecond.length -1].clientWidth)
    if (dropzoneSecond.children === null || argolaOver.clientWidth < dropzoneFirst.children[dropzoneFirst.children.length -1]){
        console.log ('Bom dia!')
        
        return true
        // console.log(argolaOver.clientWidth)
        // console.log(dropzoneSecond.lastElementChild.clientWidth)
    // } else if (argolaOver.clientWidth < dropzoneThird === null || dropzoneThird.lastElementChild.clientWidth) {
    //     return true
    // } else if (argolaOver.clientWidth < dropzoneFirst === null || dropzoneFirst.lastElementChild.clientWidth) {
    //     return true
    // 
    }  else if (argolaOver.clientWidth > dropzoneSecond.children[dropzoneSecond.children.length -2]) {
        console.log('Boa noite!')
        return false

    }
    console.log(dropzoneSecond.children[dropzoneSecond.children.length -2])
}

function dragleave() {
    
}

function drop() {
    
    // const argolaDrop = document.querySelector('.is-dragging')
    // this.appendChild(argolaDrop)
    // if (dropzoneSecond.lastElementChild === null || argolaDrop.clientWidth < dropzoneSecond.lastElementChild.clientWidth){
    //     console.log ('Bom dia!')
    //     return true
      
    // // } else if (argolaOver.clientWidth < dropzoneThird === null || dropzoneThird.lastElementChild.clientWidth) {
    // //     return true

    // // } else if (argolaOver.clientWidth < dropzoneFirst === null || dropzoneFirst.lastElementChild.clientWidth) {
    // //     return true

    // // 
    // }  else {
    //     console.log('Boa noite!')
    //     return false
    // }
}




// function (){
//     for (let i = 0; i < dropzoneSecond.childElementCount) 
//     if (disk[i].clientWidth(elemento que estamos movendo) < 
//                 disk[ultimoElemento-da-torre que queremos mover].clientWidth){
//         //add elemento na torre
//     } else {
//         undefined
//     }
// }

// mover da torre 1 para a torre 2;
// if (o tamanho do elemento do elemento for menor, pode mover)
// else (não mova)


//verificar a quantidade de elements
//dropzoneFirst
//dropzoneFirst.childElementCount
//dropzones[0]

// verificar o tamanho da div
//.clientWidth

>>>>>>> Stashed changes
