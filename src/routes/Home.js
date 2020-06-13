import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

function Home({ toDos, addToDo }) {
    const [text, setText] = useState("");
    function onChange(e) {
        setText(e.target.value);
    }
    function onSubmit(e) {
        e.prevenetDefault();
        addToDo(text);
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <from onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </from>
            <ul>
                {toDos.map(toDo => (
                    <ToDo {...toDo} key={toDo.id} />
                ))}
            </ul>
        </>
    )
}

function mapStateToPros(state) {
    return { toDos: state };
}

function mapDispatchToProps(dispatch) {
    return { 
        addToDo: text => dispatch(actionCreators.addToDo(text))
    }
}
  
export default connect(mapStateToPros, mapDispatchToProps)(Home);