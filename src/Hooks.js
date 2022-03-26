import FunctionalHookComponent from './hooks/FunctionalHookComponent'
import ClassStateComponentForComparision from './hooks/ClassStateComponentForComparision'
import AllHooks from './hooks/AllHooks'
const Hooks =() => {
  return (<>
    {/* <FunctionalHookComponent/> */}
    <AllHooks alert="props testing"/>
    {/* <ClassStateComponentForComparision/> */}
    </>
  );
}

export default Hooks;

//function Hooks() 
// or
//const Hooks =() => 