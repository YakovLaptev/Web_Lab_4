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
      type: 'DELETE_TODO'
   }
};

export const filterTodos = (text) => {
   return {
      type: 'FILTER_TODOS',
      text
   }
};

export const deleteOneTodo = (id) => {
   return {
      type: 'DELETE_ONE_TODO',
      id
   }
};