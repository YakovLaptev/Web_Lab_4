const manageTodo = (state, action) => {
   switch (action.type) {
      case 'ADD_TODO':
         return {
            id: action.id,
            text: action.text,
            invisible: false
         };
      case 'FILTER_TODOS':
         if (action.text === "") {
            return Object.assign({}, state, {
               invisible: false
            });
         }
         if (state.text.includes(action.text)) {
            return Object.assign({}, state, {
               invisible: false
            });
         }
         return Object.assign({}, state, {
            invisible: true
         });
      case 'DELETE_ONE_TODO':
         let assignedState = Array.from(state);
         if (assignedState.length > 1) {
             assignedState = assignedState.filter(todo => todo.id !== action.id);
         }
         return assignedState;
      default:
         return state
   }
};

const todosReducer = (state = [], action) => {
   switch (action.type) {
      case 'ADD_TODO':
         return [
            manageTodo(state, action),
            ...state
         ];
      case 'DELETE_TODO':
         return [];
      case 'FILTER_TODOS':
         return state.map(todo =>
            manageTodo(todo, action)
         );
      case 'DELETE_ONE_TODO':
         return manageTodo(state, action);
      default:
         return state
   }
};

export default todosReducer