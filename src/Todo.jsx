import React from 'react';
import DeleteIcon from '../node_modules/@material-ui/icons/Delete';
import './index.css';


const Todo = (props) => {
return(
    <>
    <div className="todo">
       <li> <span><DeleteIcon fontSize="inherit" className="del" onClick={() => {props.onsel(props.id);}} /> </span> {props.text} </li>
    </div>
    </>
);
  };
  export default Todo;