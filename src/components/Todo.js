import React from 'react';

const Todo = ({ onClick, invisible, text }) => (
   <li className={"element-block"}>
      <span className={`${invisible ? "invisible" : ""}`}>{text}</span>
      <button className={`btn btn-outline-secondary deleteOne-button ${invisible ? "invisible" : ""}`}
              onClick={onClick}>Удалить
      </button>
   </li>
);

export default Todo