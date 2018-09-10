import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import SingleTodos from './Singletodos';
//import React, { Component } from 'react';

class SingleTodos extends Component {
    constructor() {
        super();
    }
    deleteTodo = i => {
      let todoCopy = this.state.todos.slice();
      todoCopy.splice(i, 1);
      this.setState({todos: todoCopy});
    }
    render (){
        return (
<li>{this.props.todo}<button onClick={this.props.deleteTodo}>X</button></li>

        )
    }
}
class App extends Component {
 constructor() {
   super();
   this.state = {
     todos: [],
     currentTodo: ""
   };
 }
onInputChange = e => {
  this.setState({currentTodo: e.target.value});
}

onClick = () => {
  let todoCopy = this.state.todos.slice();
  todoCopy.push(this.state.currentTodo);
  this.setState({todos: todoCopy, currentTodo: ""});
}



 render() {
   let bulletedTodos = this.state.todos.map((e, i)=> {
     return (
       <SingleTodos todo={e} delete={()=>this.deleteTodo(i)}/>
     )
   })
   return (
     <div>
     <input placeholder="Enter toodo" value = {this.state.currentTodo} onChange = {this.onInputChange}/>
     <button onClick={this.onClick}>Addd</button>
     <br />
     {this.state.todos.length === 0 ? "Nope todos yet!" : <ul>{bulletedTodos}</ul>}
     </div>


   );

 }
}

export default App;
//c:\Users\themb\Documents\GitHub\react-dev\my-todo-list3\src\SingleTodos.js