import Static from '../StaticComponent'
export default function Event(){
    return (
        <h1>
                function component
             <button onClick={Static.handleClick}>click me</button>
        </h1>
       
    )
}