const todo = new Todo();
const todoInput = document.querySelector('#getTodoInput');
const todoListContainer = document.querySelector('#todoListContainer');

const emptyNode = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
  //   so here is the code to not to repeat the todo's childern
  // the empty node will take parent as an argument and check if there is
  // a child if it is the it will remove and the loop will run till all the
  // children are removed.
};

const renderList = () => {
  emptyNode(todoListContainer);

  todo.getTodos().map((todo) => {
    const LI = document.createElement('li');
    const DIV = document.createElement('div');
    const INPUT = document.createElement('input');
    const SPAN = document.createElement('span');

    DIV.classList.add('input');
    INPUT.type = 'text';
    INPUT.value = todo.value;
    SPAN.classList.add('crossicon');
    SPAN.innerText = 'X';
    SPAN.setAttribute('id', todo.id);

    DIV.appendChild(INPUT);
    DIV.appendChild(SPAN);
    LI.appendChild(DIV);
    todoListContainer.appendChild(LI);
  });
};

function addTodo() {
  const inputValue = todoInput.value;
  if (inputValue === '') {
    alert('Please enter a task');
    return;
  }
  todo.addTodo(inputValue);
  renderList();
}
