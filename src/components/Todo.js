import React, { Component } from "react";
import TodoList from "./TodoList";
import "./app.css";
import { motion } from "framer-motion";
export default class Todo extends Component {
  state = {
    item: "",
    isOpen: false,
    id: "",
  };

  modal = (id) => {
    this.setState({
      isOpen: !this.state.isOpen,
      id: id,
    });
  };

  editModal = (e) => {
    e.preventDefault();
    this.setState({
      isOpen: !this.state.isOpen,
    });
    if (this.state.item === "") return;
    this.props.editItem(this.state.id, this.state.item);
  };
  render() {
    return (
      <div style={{ position: "relative" }}>
        {this.props.items.length <= 0 ? (
          <p className="text-center text-white font-sans font-bold mt-12">
            Please Add Item
          </p>
        ) : (
          this.props.items.map((each, idx) => (
            <TodoList
              key={idx}
              item={each}
              delete={this.props.delete}
              isResolved={this.props.isResolved}
              modal={this.modal}
            />
          ))
        )}

        {this.state.isOpen ? (
          <motion.div
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            className=" flex justify-center items-center w-3/4 bg-red-200 lg:w-1/2 m-auto h-64 mod "
          >
            <form className="">
              <input
                type="text"
                placeholder="Edit Item"
                onChange={(e) => this.setState({ item: e.target.value })}
                className="px-2 py-1"
              />
              <button
                className="bg-blue-700 m-2 text-white px-2 py-1"
                onClick={(e) => this.editModal(e)}
              >
                Save
              </button>
            </form>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
