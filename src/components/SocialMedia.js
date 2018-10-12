import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import '../CSS/SocialMedia.css';

export default class SocialMedia extends Component {
    render(){
        return (
            <div className="social-container">
                <ul>
                    <li className="social-media-link"><a href="https://www.facebook.com/cubatoriano/?ref=py_c" target="blank"><Icon name='facebook'/></a></li>
                    <li className="social-media-link"><a href="https://www.instagram.com/cubatoriano_/" target="blank"><Icon name='instagram'/></a></li>
                    <li className="social-media-link"><a href="https://twitter.com/cubatoriano" target="blank"><Icon name='twitter'/></a></li>
                </ul>
            </div>
        )
    }
}