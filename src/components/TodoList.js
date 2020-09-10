import React, { Component } from "react";
import { motion } from "framer-motion";

export default class TodoList extends Component {
  classToApply = () => {
    return this.props.item.isResolved
      ? "flex justify-between bg-white italic shadow-lg p-1 m-3"
      : "flex justify-between bg-white  shadow-lg p-1 m-2";
  };

  onEdit = (id) => {
    this.props.modal(id);
  };

  render() {
    return (
      <motion.div layout>
        <motion.div
          layout
          initial={{ x: -1000, scale: 0 }}
          animate={{ x: 0, scale: 1 }}
          transition={{
            delay: 0,
            x: { type: "spring", stiffness: 80 },
            default: { duration: 0.75 },
            to: -1000,
          }}
          className={`${this.classToApply()}`}
        >
          <p className="text-red-700 font-bold w-50 overflow-x-hidden antialiased">
            <span>
              <input
                type="checkbox"
                name="check"
                id="check"
                onChange={() => this.props.isResolved(this.props.item.id)}
                className="m-1"
              />
            </span>

            {this.props.item.item}
          </p>

          {this.props.item.isResolved ? (
            <p className="text-red-700 transform text-sm bg-red-100 p-1 -rotate-45 rounded">
              Resolved
            </p>
          ) : (
            ""
          )}

          <p>
            {this.props.item.isResolved ? (
              ""
            ) : (
              <span
                className="px-1 text-blue-700 cursor-pointer"
                onClick={() => this.onEdit(this.props.item.id)}
              >
                Edit
              </span>
            )}

            <span
              className="px-1 text-red-700 cursor-pointer"
              onClick={() => this.props.delete(this.props.item.id)}
            >
              Delete
            </span>
          </p>
        </motion.div>
      </motion.div>
    );
  }
}
