import React, { Component } from 'react'
import {connect} from 'react-redux'
import Axios from 'axios'
import TodoList from './Components/TodoList';
import './styles/screen.css'

class App extends Component {
  componentDidMount(){
    Axios.get('http://5de80f759578cb001487adea.mockapi.io/Todo')
    .then(response =>{
      this.props.getData(response.data);
    })
  }

  render() {
    const {data} = this.props;

    // Attention: watch out for undefined default state!!!!!
    return (
      <TodoList todos={data} />
    )
  }
}

const mapStateToProps = state => {
  return {
    data: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getData: todolist => dispatch({type: "FETCH_DATA", payload: todolist})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);