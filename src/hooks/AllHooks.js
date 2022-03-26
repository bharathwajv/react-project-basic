//useState() - used to create a state in func component
//useEffect() - side-effect , runs on each render or update on any state - can be modified by second parameter to useeffect as []
//useContext() - used to share or scope values throught entire component tree.. instead of passing props

import React, { useState, useEffect, useContext } from "react";

const AllHooks = (props) => {
  const [count, setCount] = useState(1);
  const Increment = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    document.title = count;
    return () => {};
  }, [count]);
  useEffect(() => {
    alert(props.alert);
  }, []);

  const moods = {
    happy: "happpyyyy",
    sad: ":(",
  };
  const MoodsContext = useContext(moods);

  function MoodSmilie() {
    const mood = useContext(MoodsContext);
    return <p>{mood}</p>;
  }
  return (
    <>
      <h2>counter </h2>
      <button onClick={Increment}>click me {count}</button>

      <MoodsContext.Provider value={moods.happy}>
        <MoodSmilie />
      </MoodsContext.Provider>
    </>
  );
};
export default AllHooks;
