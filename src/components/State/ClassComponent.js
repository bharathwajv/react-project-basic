// class component using state

import {Component} from "react"

export default class ClassComponent extends Component{
    constructor() //constructor ocurrent class
    {
            super(); //constructor of base class Component
            this.state = { count : 1} //state object
           // this.Increment = this.Increment.bind(this); //binding 'this' class to the methord Increment
    }
    Increment = () =>{
        this.setState({
            count: this.state.count+1
        });
    }
    render(){
     return  (<body>
                    <h3> Count value is {this.state.count}</h3>
                    {/* normal way no binding of'this' required */}
                    {/* <button onClick={()=>this.Increment()}>click</button>  */}

                      {/*binding of'this' required */}
                    <button onClick={this.Increment}>click</button>  
              </body>  
              )
    }
} 
