// this reducer is responsible for translating
// from on state to another
// you can have multiple reducers
// this is where the actions are carried out

// let initialState = [
//   {
//     id: Math.floor(Math.random() * 1000000),
//     item: "cook",
//     isResolved: false,
//     createdAt: new Date().toISOString(),
//   },
// ];

let initialState = []; //initial state

// initialState.length <= 0 && initialState.push(savedItems);

//reducer function
export function itemReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE":
      let newItems = state.filter((each) => each.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newItems));
      return newItems;
    case "RESOLVED":
      return state.map((item) => {
        if (item.id === action.payload) {
          item.isResolved = !item.isResolved;
        }
        return item;
      });
    case "EDIT":
      return state.map((item) => {
        if (item.id === action.payload.id) {
          item = { ...item, item: action.payload.item };
        }
        return item;
      });
    default:
      return state;
  }
}
