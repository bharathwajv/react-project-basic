import {Component} from "react"

class ClassComponent extends Component{
    render(){
     return  <h1> Class component: {this.props.message} {this.props.children}</h1>  
    }
} 
export default ClassComponent