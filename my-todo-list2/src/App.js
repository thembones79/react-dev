import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import SingleTodos from './Singletodos';

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

deleteTodo = i => {
  let todoCopy = this.state.todos.slice();
  todoCopy.splice(i, 1);
  this.setState({todos: todoCopy});
}

 render() {
   let bulletedTodos = this.state.todos.map((e, i)=> {
     return ( 
       <p>test</p>
     //  <SingleTodos todo={e} delete={()=>this.deleteTodo(i)}/> "test"
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
