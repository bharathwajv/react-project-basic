import { Component  } from "react";
import Static from './../StaticComponent'
export default class ClassComponent extends Component{
    render(){
        return (
                <div>
                       class component
                       <button onClick={Static.handleClick}>click me</button>
                </div>
            )
    }
}