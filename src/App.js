import React, {Component} from 'react';
import axios from 'axios';
import './reset.ccss'
import './App.css';
import Header from './components/Header';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount(){
    this.getTodos();
  };

getTodos = () => {
  axios.get('/api/todos')
    .then( res => {
    this.setState({
      todos: res.data
  })
}
  ).catch(err => console.log(err))
}

  render(){
    console.log(this.state)
  return (
    <div>
      <Header/>
    </div>
  )};
}

export default App;
