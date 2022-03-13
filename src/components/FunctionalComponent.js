const displayMessage = () => {
    return "need help in react!"
}
function FunctionalComponent(props){
    console.log(props)
      return <h1>FunctionalComponent {props.name}  {displayMessage()} {props.children}</h1>  
  }
  export default FunctionalComponent 
  /*const Hello = ()=> <h1> Hello There</h1>  
  export default Hello */