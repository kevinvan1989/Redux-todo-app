import Axios from "axios";

export const toggleTodo = id => {
  return { type: "TOGGLE_TODO", payload: id };
};

export const toggleTodoItem = id => {
  return { type: "TOGGLE_TODO", payload: id };
};

export function deleteTodo(id) {
  return function(dispatch) {
    setTimeout(function() {
      dispatch({
        type: "DELETE_TODO",
        payload: id
      });
    }, 1000);
  };
};

export const getData = () => {
  return dispatch => {
    Axios.get("https://5e093602434a370014168f5b.mockapi.io/todo").then(
      response => {
        dispatch({
          type: "FETCH_DATA",
          payload: response.data
        });
      }
    );
  };
};
 
// Example of 'async' but with a delay to show
// export function deleteTodo(id){
//   return function(dispatch) {
//     setTimeout(function(){
//       dispatch(
//         {
//           type: "DELETE_TODO",
//           payload: id
//         }
//         );
//     },
//     1000)

//   };
// };

// export const deleteTodo = id => {
//   return { type: "DELETE_TODO", payload: id }