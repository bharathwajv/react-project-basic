//useState() - used to create a state in func component
//useEffect() - side-effect , intract with outside world eg: browese api, calling other api

import React, { useState, useEffect } from 'react'
const FunctionalHookComponent = () => {

    const [count, setCount] = useState(1); // [state we want to create, set state only for the state we created] = useState(initial value)
    const [isOn, setIsOn] = useState(false);

    const Increment = () => {  //be only const arrow func - no 'this' is needed
        setCount(
            count + 1         //might not update state imediatly- maybe batched
        );
        // setCount( prevCount =>
        //     prevCount + 2          // this ensures the value of the state is always updated
        // );
    } 
    const ToggleLight = () => { 
        setIsOn( prevValue => !prevValue );
    }

    useEffect(() =>{         // runs on each render
        document.title =  count;
    })

    return (<>
        <h2>counter </h2>
        <button onClick={Increment}>click me  {count}</button>
        <h2>toggle Lights </h2>
        <div style={{ height: '50px', width: '50px', background: isOn ? "yellow" : "grey" }} onClick={ToggleLight}></div>
    </>

    )
}
export default FunctionalHookComponent;