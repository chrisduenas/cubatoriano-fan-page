import React, { Component } from 'react';
import {Grid, Image, Transition } from 'semantic-ui-react';
import '../CSS/FlyUp.css';

const transitions = [
    'fly up',
  ]

export default class FlyUp extends Component {
    state = { animation: 'fly up', duration: 5000, visible: false }

        componentDidMount() {
            this.setState({ visible: !this.state.visible })
        }

    handleVisibility = () => this.setState({ visible: !this.state.visible })

    render() {
        const { animation, duration, visible } = this.state
        return(
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column floated="right">
                            <Transition.Group animation={animation} duration={duration}>
                                    {visible && <Image size='small' src='cubatoriano/src/Media/cubatoriano.jpg' />}
                            </Transition.Group>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )
    }
}