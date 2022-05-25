import logo from './logo.svg';
//import FirstComponent from './components/learning-examples/FirstComponent'
//import SecondComponent from './components/learning-examples/SecondComponent'
//import ThirdComponent from './components/learning-examples/ThirdComponent'
import React, { Component } from 'react';
import './App.css';
import './bootstrap.css'
//import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'


class App extends Component{
  render(){
    return(
      <div className="App">
        {/*<Counter/>*/}
        <TodoApp></TodoApp>
      </div>
    );
  }
}



/* class LearningComponents extends Component{
  render(){
    return(
      <div className="LearningComponents">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
} */



//class component
class FirstComponent extends Component{
  render(){
    return(
      <div className="firstComponent">
        FirstComponent
      </div>
    );
  }
}

//class component
class SecondComponent extends Component{
  render(){
    return(
      <div className="secondComponent">
        Second Component
      </div>
    );
  }
}

function ThirdComponent(){
  return(
    <div className="thirdComponent">
      Third Component
    </div>
  );
}



export default App;
