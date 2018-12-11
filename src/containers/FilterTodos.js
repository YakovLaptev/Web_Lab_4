import React from 'react';
import {connect} from 'react-redux';
import {filterTodos} from "../actions/ActionTypes";

let FilterTodos = ({dispatch}) => {
   let input;

   return (
      <input className="form-control filter-input" placeholder={"Поиск..."}
             onChange={() => dispatch(filterTodos(input.value))}
             ref={node => {input = node}}/>
   )
};

FilterTodos = connect()(FilterTodos);

export default FilterTodos