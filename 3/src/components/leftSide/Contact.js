import React, { Component } from 'react';

import './contact.css'
import { FaFacebookF} from 'react-icons/fa'
import { FaTwitter} from 'react-icons/fa'
import { FaInstagram} from 'react-icons/fa'

class Contact extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className="SocialMedia">
                <a href="www.facebook.com">{<FaFacebookF/>}</a>
                <a href="www.twitter.com">{<FaTwitter/>}</a>
                <a href="www.instagram.com">{<FaInstagram/>}</a>
                <div className="maktab">
                    <div id='circle'></div>
                    <a href="https://maktabsharif.ir/">https://maktabsharif.ir/</a>
                </div>
            </div>
        );
    }
}
 
export default Contact;