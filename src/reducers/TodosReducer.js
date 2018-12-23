const actions = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            let now = new Date(),
                date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDay() + " " +
                    now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
            return {
                id: action.id,
                text: action.text,
                invisible: false,
                done: false,
                tenSeconds: false,
                done_time: 0,
                add_date: now,
                date: date,
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
        case 'DONE_TODO':
            let assignedState = Array.from(state);
            let foundElement = assignedState.filter(todo => todo.id === action.id);
            let index = assignedState.indexOf(foundElement[0]);
            let doneDate = new Date();
            doneDate = doneDate - foundElement[0].add_date;
            console.log(foundElement);
            console.log(index);
            if (doneDate < 10000) {
                assignedState[index].tenSeconds = true;
            }
            assignedState[index].done = true;
            assignedState[index].done_time = doneDate / 1000;
            return assignedState;
        default:
            return state
    }
};

const todosReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                actions(state, action),
                ...state
            ];
        case 'DELETE_TODOS':
            return [];
        case 'FILTER_TODOS':
            return state.map(todo =>
                actions(todo, action)
            );
        case 'DONE_TODO':
            return actions(state, action);
        default:
            return state
    }
};

export default todosReducer