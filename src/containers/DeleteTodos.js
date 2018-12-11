import React from 'react';
import {connect} from 'react-redux';
import {deleteTodos} from '../actions/ActionTypes';

let DeleteTodos = ({dispatch}) => {
   return (
      <div className={"deleteAll-block"}>
         <button className={"btn btn-outline-danger deleteAll-button"} onClick={() => dispatch(deleteTodos())}>Удалить задачи</button>
      </div>
   )
};

DeleteTodos = connect()(DeleteTodos);

export default DeleteTodos