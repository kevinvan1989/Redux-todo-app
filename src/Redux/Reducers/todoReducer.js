const defaultState = [];

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      // Set payload in state
      return action.payload;

    case "TOGGLE_TODO":
      const toggledState = state.map(todo => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
        return todo;
      });

      return toggledState;

    case "DELETE_TODO":
      const updatedState = state.filter(todo => todo.id !== action.payload);
      
      return updatedState;

    default:
      return state;
  }
};

export default todoReducer;
