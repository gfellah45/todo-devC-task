import React, { Component } from "react";
import Form from "./components/Form";
import Heading from "./components/Heading";
import Todo from "./components/Todo";
import { connect } from "react-redux";
import { addItem, deleteItem, isResolved, editItem } from "./global/actions";

class App extends Component {
  render() {
    return (
      <>
        <div className="container w-full lg:w-1/2  m-auto py-2 px-1 bg-gradient-to-tr from-red-700 to-orange-600 rounded h-full">
          <Heading len={this.props.item.length} />
          <Form addItem={this.props.addItem} />
          <div className="" style={{ height: "90vh", overflowY: "auto" }}>
            <Todo
              items={this.props.item}
              delete={this.props.deleteItem}
              isResolved={this.props.isResolved}
              editItem={this.props.editItem}
            />
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state.item);
  return {
    item: state.item,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    },
    deleteItem: (id) => {
      dispatch(deleteItem(id));
    },
    isResolved: (id) => {
      dispatch(isResolved(id));
    },
    editItem: (id, item) => {
      dispatch(editItem(id, item));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
