import todosReducer from './TodosReducer';

describe('Reducer tests', () => {
    test('test 1 (ADD_TODO)', () => {
        let now = new Date(),
            date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDay() + " " +
                now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        let state = [{
            id: 1,
            text: "Тестовая задача",
            invisible: false,
            done: false,
            tenSeconds: false,
            done_time: 0,
            add_date: now,
            date: date,
        }];
        let addTodoAction = {type: 'ADD_TODO', id: 2};
        let newState = todosReducer(state, addTodoAction);
        expect(newState.length).toEqual(2);
    });
    test('test 2 (FILTER_TODOS)', () => {
        let now = new Date(),
            date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDay() + " " +
                now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        let state = [
            {
                id: 1,
                text: "Тестовая задача",
                invisible: false,
                done: false,
                tenSeconds: false,
                done_time: 0,
                add_date: now,
                date: date,
            }
        ];
        let filterTodosAction = {type: 'FILTER_TODOS', text: "поиск"};
        let newState = todosReducer(state, filterTodosAction);
        expect(newState[0].invisible).toEqual(true);
    });
    test('test 3 (DONE_TODO)', () => {
        let now = new Date(),
            date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDay() + " " +
                now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
        let state = [
            {
                id: 1,
                text: "Тестовая задача",
                invisible: false,
                done: false,
                tenSeconds: false,
                done_time: 0,
                add_date: now,
                date: date,
            }
        ];
        let doneTodosAction = {type: 'DONE_TODO', text: "поиск", id: 1};
        let newState = todosReducer(state, doneTodosAction);
        expect(newState[0].tenSeconds).toEqual(true);
    });
});
