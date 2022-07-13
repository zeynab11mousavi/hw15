import {Component} from 'react';
import'./pic.css';
class Pic extends Component {
    state = {  } 
    render() { 
        return (
            // <img className="Pic" src={require("./pic/Me.png")} alt="Me"/>
            <div className="img"></div>
        );
    }
}
 
export default Pic;