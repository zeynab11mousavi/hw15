import {Component} from 'react';
import { FaBars} from 'react-icons/fa';
import './navStyle.css';
class Navbar extends Component {
    state = {  } 
    render() { 
        return (
            <div className='NavbarInner'>
                <h2 className='titleName'> Zeynab</h2>
                <a className='email' href="zeynab11mousavi@gmail.com">zeynab11mousavi@gmail.com</a>
                <FaBars className='menu' role='button'/>
            </div>
        );
    }
}
 
export default Navbar;