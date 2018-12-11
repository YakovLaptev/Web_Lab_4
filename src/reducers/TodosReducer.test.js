import todosReducer from './TodosReducer';

describe('Тестирование редюсера', () => {
   it('При ADD_TODO состояние должно увеличиться на один элемент', function () {
      let state = [{
         id: 1,
         text: "Первая задача",
         completed: false,
         invisible: false
      }];
      let addTodoAction = {type: 'ADD_TODO', id: 2};
      let newState = todosReducer(state, addTodoAction);
      expect(newState.length).toEqual(2);
   });
   it('При FILTER_TODOS и отсутствии совпадений invisible элемента состояния должно быть true', function () {
      let state = [
         {
            id: 1,
            text: "Первая задача",
            completed: false,
            invisible: false
         }
      ];
      let filterTodosAction = {type: 'FILTER_TODOS', text: "1 zadacha"};
      let newState = todosReducer(state, filterTodosAction);
      expect(newState[0].invisible).toEqual(true);
   });
});
