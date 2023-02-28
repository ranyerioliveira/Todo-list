//Buscar dentro da Div app a ul.
var listElement = document.querySelector('#app ul');

var inputElement = document.querySelector('#app input');

var buttonElement = document.querySelector('#app button');
//buscando a lista convertida em JSON, o || é uma array vazia para caso aconteça erro de lista vazia
var todos = JSON.parse(localStorage.getItem('lista_todos')) || [];

//array com a lista de itens pré cadastrados
//retirar a lista todos com as arrays pq foi converitada na json
//var todos = ['Arrumar a casa', 'Estudar estacio', 'Estudar Anhanguera', 'Estudar JavaScript'];



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
        //parte da funcinalidade do botão de excluir
        var posicao = todos.indexOf(todo);
        linkElement.setAttribute('onclick', 'deletarTodo('+posicao+')');
        var linkText = document.createTextNode(' - Excluir');
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
    salvarDados()
}

buttonElement.onclick = adicionarTodo;

//dando função ao botão excluir

function deletarTodo(posicao){
    //splice remove algo da lista passado a posição e o tem do array
    todos.splice(posicao,1)
    renderTodos();
    salvarDados()
    
}
 //Criar uma função para salvar os dados no localStorage

 function salvarDados(){
    //invês de passar o a chave (todos) passara convertendo a lista com JSON
    localStorage.setItem('lista_todos', JSON.stringify(todos));
 }
