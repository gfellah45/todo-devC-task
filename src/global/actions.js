// this are the actions to be taking

export const addItem = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
export const deleteItem = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

export const isResolved = (id) => {
  return {
    type: "RESOLVED",
    payload: id,
  };
};

export const editItem = (id, item) => {
  return {
    type: "EDIT",
    payload: {
      id,
      item,
    },
  };
};
