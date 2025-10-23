const todoList=[];


 renderTodoList();

 function renderTodoList(){

 
     let TodoListHTML='';
    for(let i=0 ; i < todoList.length; i++){
        const todoObject=todoList[i];
        const{name,dueDate}=todoObject;
        const html = 
        `
        <div class="todo-name">${name}</div>
        <div class="todo-date">${dueDate}</div>
        <button class="delete-button" onclick="
        todoList.splice(${i} , 1);
        renderTodoList();
        " class="Js-delete-button">Delete</button>
        `;
        TodoListHTML+=html;

      }
   

      document.querySelector('.Js-to-do-List').innerHTML=TodoListHTML;

    }

function addTodo(){

    const inputElement=document.querySelector('.Js-to-do-list');
    const name=inputElement.value;
    const dateInputElement=document.querySelector('.JS-to-do-date');
       const dueDate=dateInputElement.value;
    todoList.push(
        {name,
        dueDate
        });
    console.log(todoList);

    inputElement.value='';
    renderTodoList();

}
function HandleKeyDown(event){
     if(event.key==='Enter'){
        addTodo();
     }
};