// class component using state

import React, { Component } from "react"

export default class ClassStateComponentForComparision extends Component {
    state = {
        count: 1,
        isOn: false,
        x:null,
        y:null
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
        window.addEventListener('mousemove',this.handleMove); // eg: to add event listner 
    }
    componentDidUpdate(){  //for each component update
        document.title =  this.state.count ;
    }
    componentWillUnmount(){  //when component detaches - can remove not needed things which might cause memory leaks
        window.removeEventListener('mousemove',this.handleMove); 
    }
    handleMove= event =>{
        this.setState({
            x: event.pageX,
            y: event.pageY
        });
    }
    render() {
        return (<>
            <h2>counter </h2>
            <h3> Count value is {this.state.count}   <button onClick={this.Increment}>click</button>   </h3>

            <h2>toggle Lights </h2>
            <div style={{ height: '50px', width: '50px', background: this.state.isOn ? "yellow" :  "grey" }} onClick={this.ToggleLight}></div>

            <h2>Mouse position using event listner </h2>
            <p>x position {this.state.x}</p>
            <p>y position {this.state.y}</p>
        </>
        )
    }
} 
