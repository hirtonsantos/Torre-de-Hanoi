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

function dragover() {
    const argolaOver = document.querySelector('.is-dragging')
    this.appendChild(argolaOver)

}

function dragleave() {
    
}

function drop() {
    
}