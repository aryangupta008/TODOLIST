import React from 'react'
import {Todoitems} from "./Todoitems";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {props.todos.length===0? "No Todos to display":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<Todoitems todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
        </div>
    )
}
