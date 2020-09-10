import React, { Component } from "react";

export default class Form extends Component {
  state = {
    id: "",
    item: "",
    isResolved: false,
    createdAt: new Date().toISOString(),
  };

  onAddItem = (e) => {
    e.preventDefault();
    if (this.state.item === "") return;
    localStorage.setItem("todos", JSON.stringify(this.state));
    this.props.addItem(this.state);
    this.setState({
      item: "",
    });
  };

  render() {
    return (
      <div className="text-center">
        <form action="">
          <input
            className="px-2 py-1 placeholder-red-700 shadow-lg text-red-700 placeholder-opacity-50 outline-none"
            type="text"
            placeholder="Enter item"
            value={this.state.item}
            onChange={(e) =>
              this.setState({
                id: Math.floor(Math.random() * 1000000000),
                item: e.target.value,
              })
            }
          />
          <button
            className="bg-white px-2 py-1 m-2 font-bold rounded shadow-lg text-red-700"
            onClick={(e) => this.onAddItem(e)}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
