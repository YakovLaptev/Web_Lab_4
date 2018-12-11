import React, {Component} from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import DeleteTodos from '../containers/DeleteTodos';
import FilterTodos from '../containers/FilterTodos';
import '../styles/styles.css';
import '../styles/bootstrap.css';

class App extends Component {
   render() {
      return (
         <div>
            <div className={"control-block"}>
               <AddTodo/>
               <DeleteTodos/>
            </div>
            <div className={"list-block"}>
               <VisibleTodoList/>
            </div>
            <div className={"filter-block"}>
               <FilterTodos/>
            </div>
         </div>
      )
   }
}

export default App