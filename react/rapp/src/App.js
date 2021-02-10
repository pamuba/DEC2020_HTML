import logo from './logo.svg';
import './App.css';
import First from './components/First'
import Classfirst from './components/Classfirst';
import StateDemo1 from './components/StateDemo1';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
     {/* <First name="John" role="dev" />
     <First name="Mary" role="Analyst">
       Analyst is his role
     </First>
     <First name="Jim" role="testing">
       <button>Click</button>
     </First>
     <First name="Bill" role="reviewer">
       <input type="text" value="Email"></input>
     </First> */}
     {/* <Classfirst name="Bill" role="reviewer">
      <input type="text" value="Email"></input>
     </Classfirst> */}

     {/* <StateDemo1></StateDemo1> */}

     <Counter></Counter>
    </div>
  );
}

export default App;
