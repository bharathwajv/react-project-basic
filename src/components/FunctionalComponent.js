const displayMessage = () => {
    return "need help in react!"
}
function FunctionalComponent(props){
    const{name} =props; //destructing props
    console.log(props)
      return <h1>FunctionalComponent {name}  {displayMessage()} {props.children}</h1>  
  }
  export default FunctionalComponent 
  /*const Hello = ()=> <h1> Hello There</h1>  
  export default Hello */