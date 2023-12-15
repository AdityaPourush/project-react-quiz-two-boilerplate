import './App.css';
import Home from './Components/HomeComponent';
import Quiz from './Components/QuizComponent';
import Result from './Components/ResultComponent';

function App() {
  return (
    <div className="App">
      <Home/>
      <hr/>
      <Quiz/>
      <hr/>
      <Result/>
    </div>
  );
}

export default App;