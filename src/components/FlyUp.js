import React, { Component } from 'react';
import {Grid, Image,Segment, Transition, Header } from 'semantic-ui-react';
import '../CSS/FlyUp.css';
import HomePopUp from './HomePopUp';

export default class FlyUp extends Component {
    state = { animation: 'fly up', duration: 3000, visible: false }


        componentDidMount() {
            this.setState({ visible: !this.state.visible })
        }

    handleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { animation, duration, visible } = this.state

        return(
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column floated="right" width={8}>
                            <Transition.Group animation={animation} duration={duration}>
                                        {visible && 
                                                <div id="button">
                                                    <HomePopUp/>
                                                </div>
                                        }
                            </Transition.Group>
                        </Grid.Column>
                        <Grid.Column floated="right" width={9}>
                            <Transition.Group animation={animation} duration={duration}>
                                    {visible && 
                                            <div id="button2">
                                            </div>
                                    }
                            </Transition.Group>
                        </Grid.Column>
                        <Grid.Column floated="right" width={10}>
                            <Transition.Group animation={animation} duration={duration}>
                                    {visible && 
                                            <div id="button3">
                                            </div>
                                    }
                            </Transition.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}