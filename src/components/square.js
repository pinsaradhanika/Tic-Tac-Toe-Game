import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

 function Square(props){
    return (
        <button className ="square" onClick={props.onClick}>
            {props.value}
       </button>
    )
}