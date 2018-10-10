import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import '../CSS/HomePage.css';


export default class HomePage extends Component {
    render() {
        return (
            <div id="homepage">
                <div className="homepage-container"></div>
                    <Segment>
                            <div className="text-container"></div>
                    </Segment>
            </div>
        )
    }
}