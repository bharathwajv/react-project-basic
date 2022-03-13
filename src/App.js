import './App.css';
import FunctionalComponent from  './components/FunctionalComponent'
import ClassComponent from  './components/ClassComponent'
import ClassComponentUsingState from  './components/State/ClassComponent'
import FuncCompEventHandling from './components/EvevntHandling/FunctionComponent'
import ClassCompEventHandling from './components/EvevntHandling/FunctionComponent'
function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent name="Bharath">
          <h3>children prop</h3>
      </FunctionalComponent> */}

      {/* <ClassComponent message="message content as prop">
          <h3>class children prop</h3>
      </ClassComponent> */}

      <ClassComponentUsingState></ClassComponentUsingState>

      {/* <FuncCompEventHandling></FuncCompEventHandling> */}

      {/* <ClassCompEventHandling></ClassCompEventHandling> */}
    </div>
  );
}

export default App;
