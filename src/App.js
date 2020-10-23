import React, { Component } from 'react';

import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      // todos : [{title:"usama",edit:false},{title:"ali",edit:false}]
      todos : [],
      value: ''
    }
  }
  addTodo=()=>{
    let obj = {title:this.state.value}
    this.state.todos.push(obj)
    this.setState({
      todos:this.state.todos,
      value:''
    })
    // console.log(this.state.todos)
  }
  delTodo=(index)=>{
    // console.log(index)
    this.state.todos.splice(index,1)
    this.setState({
      todos:this.state.todos
    })
  }
  editTodo=(index,val)=>{
    // var updatedval = prompt("enter val")
    // this.state.todos[index] = updatedval
   
    this.state.todos[index].edit = true;
     this.setState({
      todos:this.state.todos
    })
  }
  handleChange=(e,index)=>{
    // console.log(e.target.value,i)
    this.state.todos[index].title = e.target.value
    this.setState({
      todos:this.state.todos
    })
  }
  update=(index)=>{
    this.state.todos[index].edit = false;
    this.setState({
      todos:this.state.todos
    })
  }
  render(){
    let {todos,value} = this.state
    return(
      <div>
        <input value={value} onChange={(e)=>this.setState({value:e.target.value})} placeholder="enter todo" type="text"/>
        <button onClick={this.addTodo}>Add item</button>
        <ul>
        {todos.map((v,i)=>{
          return <li key={i}>{v.edit ? <input onChange={(e)=>this.handleChange(e,i)} value={v.title} type="text"/> :v.title}
          {v.edit ?  <button onClick={()=>this.update(i)} >update</button> :
          <button onClick={()=>this.editTodo(i,v.title)}>Edit</button>}
          <button onClick={()=>this.delTodo(i)}>Delete</button>
          </li>
        })}
        </ul>
      </div>
    )
  }
}

export default App;
