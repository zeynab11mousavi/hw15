import {Component} from 'react';
import'./Right.css';
import { FaDownload} from 'react-icons/fa';
import {FaTelegram} from 'react-icons/fa';

class Right extends Component {
    state = {  } 
    render() { 
        return (
            <div className="container">

                <div className="CircleWrapper">
                    
                    <div id="emptyBlue"></div>
                    <div id="fullBlue"></div>
                    <div id="red">

                    </div>
                </div>



                <div className="MyInfo">
                    <h4 id="Export">Export on</h4>
                    <h2 id="introducingMySelf">Based in Iran <br /> I'm developer and <br /> UI/UX designer </h2>
                    <p id="belowIntroduce"> Hey are you looking for a designer to build <br />
                     your brand grow your business? <br />
                    let's shake hands with me.</p>
                    <a href="www.google.com" id='CV'>Download CV {<FaDownload className="IconDownload"/>}</a>

                    <div className="chat">Let's chat <FaTelegram/> </div>


                    
                </div>
                
            </div>
        );
    }
}
 
export default Right;
    