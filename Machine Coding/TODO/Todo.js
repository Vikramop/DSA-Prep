class Todo {
  constructor() {
    this.todos = [];
  }
  addTodo(value) {
    this.todos.push({ id: parseInt(Math.random() * 1000).toString(), value });
  }
  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  updateTodo(idToUpdate, valueToUpdate) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === idToUpdate)
        return { id: idToUpdate, value: valueToUpdate };
      return todo;

      // so here basicalyy we are itrating through each todo if we found the
      //  to do with matching id we will change the value or update it's value if not we'll return it
    });
  }

  isEmpty() {
    return this.todo.length === 0;
  }

  getTodos() {
    return this.todos;
  }

  setTodos(todos) {
    this.todos = todos;
  }
}

// this.todo = this.todo.filter((todo)=> this.todo !== id)
// this.todos.push({id:parseInt(todo.idMath.random()* 1000)}, value)
// this.todo = this.todo.push({id:parseInt(Math.random()*1000), value})

// updateTodo(id, value) {
//     this.todos = this.todo.map((todo) =>{
//         if (todo.id === id) return {id,value} ;
//         return todo;
//     })
// }

// updateTodo(id, value) {
//     if(todo.id===id) return {id, value}
//     return todo
// }

// updateTodo (id,value) {
//     this.todos = this.todo.map ((todo) =>{
//         if (todo.id === id) return {id, value}
//         return todo
//     })
// }
