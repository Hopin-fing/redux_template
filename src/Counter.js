import React from 'react'
import {connect} from 'react-redux'
import {add2} from "./redux/actions/actions";

class Counter extends React.Component{
    render() {
        return(
            <div style={{border: '1px solid green'}}>
                <h1>Counter2: {this.props.counter}</h1>
                <div>
                    <button onClick={() => this.props.onAdd(15)}>Add</button>
                </div>
            </div>

        )
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        counter: state.counter2.counter2
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onAdd: number => dispatch(add2(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)