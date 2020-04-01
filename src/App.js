import React, { Component } from "react";
import { connect } from "react-redux";
import TodoList from "./Components/TodoList";
import "./styles/screen.css";
import { getData } from "./Redux/Actions/todoActions";

class App extends Component {
  componentDidMount() {
    this.props.getData();

    // Axios.get('http://5de80f759578cb001487adea.mockapi.io/Todo')
    // .then(response =>{
    //   this.props.getData(response.data);
    // })
  }

  render() {
    const { data } = this.props;

    // Attention: watch out for undefined default state!!!!!
    return <TodoList todos={data} />;
  }
}

const mapStateToProps = state => {
  return {
    data: state
  };
};

const mapDispatchToProps = dispatch => ({ 
  getData: () => dispatch(getData())
});
 
export default connect(mapStateToProps, mapDispatchToProps)(App);