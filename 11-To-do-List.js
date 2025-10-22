const todoList=[];


 renderTodoList();

 function renderTodoList(){

 
       let TodoListHTML='';
      for(let i=0 ; i < todoList.length; i++){
            const todo=todoList[i];
            const html = `<p>${todo}</p>`;
            TodoListHTML+=html;

      }
      console.log(TodoListHTML);

      document.querySelector('.Js-to-do-List').innerHTML=TodoListHTML;

    }

function addTodo(){

    const inputELement=document.querySelector('.Js-to-do-list');
    const todoListItem=inputELement.value;
    todoList.push(todoListItem);
    console.log(todoList);

    inputELement.value='';
    renderTodoList();

}