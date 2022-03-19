// class component using state

import React, { Component } from "react"

export default class ClassStateComponentForComparision extends Component {
    state = {
        count: 1,
        isOn: false
    }
    Increment = () => {
        // this.setState({
        //     count: this.state.count+1     //might not update state imediatly- maybe batched
        // });
        this.setState(prevState => ({
            count: prevState.count + 1   // to ensure the latest state of object
        }));
    }
    ToggleLight = () => {
        this.setState(prevState => ({
            isOn: !prevState.isOn 
        }));
    }

    //lifecycle methords
    componentDidMount(){  //on initialized call in class component 
        document.title =  this.state.count ;
    }
    componentDidUpdate(){  //for each component update
        document.title =  this.state.count ;
    }

    render() {
        return (<>
            <h2>counter </h2>
            <h3> Count value is {this.state.count}   <button onClick={this.Increment}>click</button>   </h3>

            <h2>toggle Lights </h2>
            <div style={{ height: '50px', width: '50px', background: this.state.isOn ? "yellow" :  "grey" }} onClick={this.ToggleLight}></div>
        </>
        )
    }
} 
