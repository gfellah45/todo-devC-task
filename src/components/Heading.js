import React, { Component } from "react";

export default class Heading extends Component {
  render() {
    return (
      <div>
        <div className="flex justify-between w-11/12 m-auto pb-8">
          <h1 className="font-bold text-blue-100 text-2xl">TODO LIST</h1>
          <p className="text-blue-100 font-bold">
            Items Added{" "}
            <span className="bg-white rounded-full text-red-700 mt-2  text-sm h-5 w-5 inline-block text-center">
              {this.props.len}
            </span>
          </p>
        </div>
      </div>
    );
  }
}
