import './App.css';
import Contact from './components/leftSide/Contact';
import Info from './components/leftSide/Info';
import Navbar from './components/NavBar/Navbar';
import Pic from './components/leftSide/Pic';
import Right from './components/RightSide/Right';

function App() {
  return ( 
    <div className = "App" >

      
      <div className="Navbar">
        <Navbar/>
      </div>


      <div className="theBody">

        <div className="firstCol">
            <div className="Info">
              <Info/>
            </div>
            <div className="Contact">
              <Contact/>
            </div>
        </div>


        <div className="secondCol">
            <div className="Pic">
              <Pic/>
            </div>
        </div>


        <div className="thirdCol">
            <div className='Right'>
              <Right/>
            </div>
        </div>    


    </div>
  </div>
  );
}

export default App;