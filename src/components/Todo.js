import React from 'react';

const Todo = ({onClick, done, tenSeconds, done_time, invisible, text, date}) => (
    <li className={`element-block ${tenSeconds ? "tenSeconds" : ""}`}>
        <span className={`${invisible ? "invisible" : ""}`}>Текст "{text}"</span>
        <span className={`date ${invisible ? "invisible" : ""}`}>Время добавления: {date}</span>
        <span className={`date ${!done ? "invisible" : ""}`}>Время выполнения: {done_time}сек</span>
        <button className={`btn btn-outline-secondary done-button ${invisible ? "invisible" : ""} ${done ? "invisible" : ""}`}
                onClick={onClick}>Выполнить
        </button>
    </li>
);

export default Todo