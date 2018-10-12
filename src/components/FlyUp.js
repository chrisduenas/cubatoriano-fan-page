import React, { Component } from 'react';
import {Grid, Image,Segment, Transition, Header } from 'semantic-ui-react';
import '../CSS/FlyUp.css';
import HomePopUp from './HomePopUp';

export default class FlyUp extends Component {
    state = { animation: 'fly up', duration: 5000, visible: false }


        componentDidMount() {
            this.setState({ visible: !this.state.visible })
        }

    handleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { animation, duration, visible } = this.state

        return(
            <div className="bubble">
                <Grid>
                    <Grid.Row columns={9}>
                        <Grid.Column  width={3}>
                            <Transition.Group animation={animation} duration={duration}>
                                    {visible && 
                                            <div id="button">
                                                <HomePopUp/>
                                            </div>
                                    }
                            </Transition.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}