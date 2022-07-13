import './App.css';
import {Component} from 'react';
import EOne from './components/e1/e1';
import ETwo from './components/e2/e2';

 class App extends Component{
    render(){ 
    return (
      <div className="App">

          <div className="ExerciseOne">
            <EOne></EOne>
          </div>

          <div className="ExerciseTwo">
            <ETwo></ETwo>
          </div>

      </div>
    )
  }
}
export default App; 