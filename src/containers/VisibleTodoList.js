import { connect } from 'react-redux'
import { deleteOneTodo } from '../actions/ActionTypes'
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos) => {
   return todos;
};

const mapStateToProps = (state) => {
   return {
      todos: getVisibleTodos(state.todos)
   }
};

const mapDispatchToProps = (dispatch) => {
   return {
      onTodoClick: (id) => {
         dispatch(deleteOneTodo(id))
      }
   }
};

const VisibleTodoList = connect(
   mapStateToProps,
   mapDispatchToProps
)(TodoList);

export default VisibleTodoList