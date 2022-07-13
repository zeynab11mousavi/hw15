import {Component} from 'react';
import './info.css'
class Info extends Component {
    state = {  } 
    render() { 
        return (
            <div className="InsideInfo">
                <h1 className='Name'>Hi,</h1>
                <h1 className='Name'>I'm <span id='Zeynab'> Zeynab </span></h1>
                <h3 id='JobTitle'>User Interface Designer</h3>
                <button>Hire Me <span id='arrow'>→</span></button>
            </div>
        );
    }
}
 
export default Info;