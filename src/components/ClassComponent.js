import {Component} from "react"

class ClassComponent extends Component{
    render(){
        const{message} = this.props; //destructing props
     return  <h1> Class component: {message} {this.props.children}</h1>  
    }
} 
export default ClassComponent