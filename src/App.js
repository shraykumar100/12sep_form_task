import './App.css';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {
  return (
    <div className="maincomp">
      <Signin className="leftdiv" />
      <Signup className="rightdiv" />
    </div>
  );
}

export default App;
