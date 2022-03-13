import logo from './logo.svg';
import './App.css';
import FunctionalComponent from  './components/FunctionalComponent'
import ClassComponent from  './components/ClassComponent'

function App() {
  return (
    <div className="App">
      {/* <FunctionalComponent name="Bharath">
          <h3>children prop</h3>
      </FunctionalComponent> */}
      {/* <ClassComponent message="message content as prop">
          <h3>class children prop</h3>
      </ClassComponent> */}
      <FunctionalComponent name="Bharath"/>
    </div>
  );
}

export default App;
