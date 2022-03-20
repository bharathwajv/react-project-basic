//useState() - used to create a state in func component
//useEffect() - side-effect , intract with outside world eg: browese api, calling other api

import React, { useState, useEffect } from 'react'
const FunctionalHookComponent = () => {

    const [count, setCount] = useState(1); // [state property we want to create, methord to set state only for the state we created] = useState(initial value)
    const [isOn, setIsOn] = useState(false);
    const [mousePos, setMousePos] = useState({ x: null, y: null }); // can be destructured as = const [{x,y}, setMousePos]
    const [onlineStatus, setStatus] = useState(navigator.onLine);
    const Increment = () => {  //be only const arrow func - no 'this' is needed
        setCount(
            count + 1         //might not update state imediatly- maybe batched
        );
        // setCount( prevCount =>
        //     prevCount + 2          // this ensures the value of the state is always updated
        // );
    }
    const ToggleLight = () => {
        setIsOn(prevValue => !prevValue);
    }
     
    let isMounted = true;
    useEffect(() => {         // runs on each render or update on any state - can be modified by second parameter to useeffect as []
        document.title = count;
        window.addEventListener('mousemove', handleMove);
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {       ///when component detaches - similar to componentWillUnmount but Adv: called everytime before the effect runs
            window.removeEventListener('mousemove', handleMove);
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            isMounted =false; //if listeners don't support destruction - wrap it inside ismounted condition
        }
    }, [count]); // modify on what all valuse use effect has to be called rather than all time

    const handleMove = event => {
        // debugger
        setMousePos({
            x: event.pageX,
            y: event.pageY
        });
    }
    const handleOnline = () => {
        setStatus(true);
    }
    const handleOffline = () => {
        setStatus(false);
    }
    return (<>
        <h2>counter </h2>
        <button onClick={Increment}>click me  {count}</button>

        <h2>toggle Lights </h2>
        <div style={{ height: '50px', width: '50px', background: isOn ? "yellow" : "grey" }} onClick={ToggleLight}></div>

        <h2>Mouse position using event listner </h2>
        <p>x position {mousePos.x}</p>
        <p>y position {mousePos.y}</p>

        <h2>current status {onlineStatus ? "online" : "offline"} </h2>
    </>

    )
}
export default FunctionalHookComponent;