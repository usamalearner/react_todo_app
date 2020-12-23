import React, { Component } from 'react';

import { PDFDownloadLink } from "@react-pdf/renderer";
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

import { PDf } from './pdf';


library.add(faFilePdf);


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
    let obj = {title:this.state.value,date: new Date()}
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
  editTodo=(index)=>{
    // var updatedval = prompt("enter val")
    // this.state.todos[index] = updatedval
   
   
    let Todo = this.state.todos
    Todo[index].edit = true;
     this.setState({
      todos:Todo
    })
  }
  handleChange=(e,index)=>{
    // console.log(e.target.value,i)
    let Todo = this.state.todos
   Todo[index].title = e.target.value
    this.setState({
      todos:Todo
    })
  }
  update=(index)=>{
    let Todo = this.state.todos
    Todo[index].edit = false;
    this.setState({
      todos:Todo
    })
  }
  render(){
    let {todos,value} = this.state
    return(
      <div className="center">
        <h1>Todo app by Syed Usama Ali</h1>
        <h1>React Js</h1>
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
        {todos.length > 0 && <PDFDownloadLink
            document={<PDf data={todos} />}
            fileName="todoList.pdf"
            style={{
              textDecoration: "none",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              // padding: "10px",
              color: "#4a4a4a",
              backgroundColor: "#f2f2f2",
              // border: "1px solid #4a4a4a"
            }}
          >
            {({ loading }) =>
              loading ? "Loading document..." :
              <div className="wid">
              <p className="pdf">
  
                <FontAwesomeIcon icon='file-pdf' className="icon-pdf" color="red" />Generate List
                </p>
                </div>
                
            }

          </PDFDownloadLink>}
          {
            todos.length <= 0 ? <p>Add items todo to generate List</p> : null
          }
      </div>
    )
  }
}

export default App;
