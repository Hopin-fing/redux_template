import './App.css';
import React,{Component} from "react";
import {connect} from 'react-redux'
import Counter from "./Counter";
import {add, addNumber, sub} from "./redux/actions/actions";

class App extends Component {


  render() {
    return (
        <div className="App">
          <h1>Counter1:{this.props.counter}</h1>
          <button onClick={this.props.onAdd}>Прибавить 1</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
          <button onClick={() =>this.props.onAddNum(15)}>Добавить 15</button>
            <Counter/>
        </div>
    );
  }

}

function mapStateToProps(state) {
    return {
        counter: state.counter1.counter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onAdd: () => dispatch(add()),
        onSub: () => dispatch(sub()),
        onAddNum: number => dispatch(addNumber(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
