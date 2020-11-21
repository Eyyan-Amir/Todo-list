import React, { Component } from "react";
import "../App.css";

export default class Todoform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: Math.random(),
      text: this.state.text,
    });
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <h1 className="Todo" style={{ color: "lightgreen" }}>
          TODO App
        </h1>
        <label className="Todoinput2" htmlFor="type">
          Please Type{" "}
        </label>
        <form onSubmit={this.handleSubmit}>
          <input
            id="type"
            name="text"
            className="Todoinput"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder=" Enter the  ........."
          />
          <button className="btnclass" onClick={this.handleSubmit}>
            Click
          </button>
        </form>
      </div>
    );
  }
}
