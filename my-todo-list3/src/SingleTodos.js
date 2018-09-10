import React, { Component } from 'react';

class SingleTodos extends Component {
    constructor() {
        super();
    }

    render (){
        return (
<li>{this.props.todo}<button onClick={this.props.deleteTodo}>X</button></li>

        )
    }
}

export default SingleTodos;