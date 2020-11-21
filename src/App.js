// import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Todo from "./component/Todo";
// import Todoform from "./component/Todo";

// class App extends React.Component {
//   state = {
//     todos: [],
//   };
//   addtodo = (todo) => {
//     this.setState({
//       todos: [todo, ...this.state.todos],
//     });
//   };
//   handleDeleteTodo = (id) => {
//     this.setState({
//       todos: this.state.todos.filter((todo) => todo.id !== id),
//     });
//   };
//   render() {
//     return (
//       <div>
//         <Todoform onSubmit={this.addtodo} />
//         {this.state.todos.map((todo) => (
//           <div
//             className="textDec"
//             key={todo.id}
//             onDelete={() => this.handleDeleteTodo(todo.id)}
//           >
//             {todo.text}
//             <button onClick={this.onDelete}>x</button>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;

import React from "react";
import "./App.css";

export default class Todoform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      value: [],
      id: "",
    };
  }
  handleChange = (event) => {
    this.setState({ user: event.target.value });
  };
  handleSave = () => {
    const { value, user } = this.state;
    let array = value;
    array.push(user);
    this.setState({ value: array });
  };
  removeItem = (item) => {
    const { value, user } = this.state;
    let index = value.findIndex((v) => v.id == item.id);
    value.splice(index, 1);
    this.setState({
      value,
    });
  };

  render() {
    const type = " ";
    return (
      <div>
        <h1 className="Todo" style={{ color: "lightgreen" }}>
          TODO App
        </h1>
        <label className="Todoinput2" htmlFor="type">
          Please Type
        </label>
        <div className="Todoinput">
          <input
            id="type"
            className="Todoinput"
            name="text"
            value={this.state.user}
            type="text"
            placeholder="Enter the  ........"
            onChange={this.handleChange}
          />
          {type ? <strong> {type}</strong> : "Please type your name"}
          <button className="btnclass" onClick={this.handleSave}>
            Click
          </button>
          {this.state.value.map((item, index) => {
            return (
              <div className="textDec" key={index.id}>
                {index} = {item}
                <button onClick={() => this.removeItem(item)}>x</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
