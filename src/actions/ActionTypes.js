let nextTodoId = 0;

export const addTodo = (text) => {
   return {
      type: 'ADD_TODO',
      id: nextTodoId++,
      text
   }
};

export const deleteTodos = () => {
   return {
      type: 'DELETE_TODOS'
   }
};

export const filterTodos = (text) => {
   return {
      type: 'FILTER_TODOS',
      text
   }
};

export const doneTodo = (id) => {
   return {
      type: 'DONE_TODO',
      id
   }
};