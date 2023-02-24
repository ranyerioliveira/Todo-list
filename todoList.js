//Buscar dentro da Div app a ul.
var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');

//array com a lista de itens pré cadastrados
var todos = ['Arrumar a casa', 'Estudar estacio', 'Estudar Anhanguera', 'Estudar JavaScript'];

//renderizar a lista na tela

function renderTodos(){
    //limpar a alista do todos

    listElement.innerHTML= '';

    for(todo of todos){
        console.log(todo);
        
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        //Colocar o botão de excluir um item (ainda sem a função)
        //criado a tag <a> com um href passando '#'
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#');
        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        
        //aparecer na tela
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    }
}

renderTodos();
//capiturar o dados que adicionado na pagina na lista

function adicionarTodo(){
    //Caso adicione e se o campo estiver vazio
    if (inputElement.value=='') {alert("Digite alguma tarefa");
    //Com o return false ele não vai acionar o botão
    return false;}

    var todoText = inputElement.value;
    todos.push(todoText);

    //limpar o texto que ta no imput
    inputElement.value='';
    renderTodos();

}

buttonElement.onclick = adicionarTodo;

//dando função ao botão excluir

function deletarTodo(){
    
}
