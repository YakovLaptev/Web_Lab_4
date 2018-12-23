import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions/ActionTypes';

let AddTodo = ({dispatch}) => {
    let input;

    return (
        <div className={"addNew-block"}>
            <form onSubmit={e => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodo(input.value));
                input.value = ''
            }}>
                <input className="form-control addNew-input" ref={node => {
                    input = node
                }} placeholder={"Новая задача"}/>
                <button className="btn btn-outline-primary addNew-button" type="submit">
                    Добавить
                </button>
            </form>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo