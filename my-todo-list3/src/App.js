import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
  let todoCopy = this.state.dodos.slice();
  todoCopy.push(this.state.currentTodo);
  this.setState({todos: todoCopy, currentTodo: ""});
}



 render() {
   let bulletedTodos = this.state.todos.map((e, i)=> {
     return (
       <li key={i}>{e}</li>
     )
   })
   return (
     <div>
     <input placeholder="Enter todo" value = {this.state.currentTodo} onChange = {this.onInputChange}/>
     <button>Add</button>
     <br />
     {this.state.todos.lenth === 0 ? "No todos yet!" : "You still have some todos"}
     </div>


   );

 }
}

export default App;
