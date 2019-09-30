import React, { Component } from 'react';
import {
    Header, Divider, Card, Grid, Container
} from 'semantic-ui-react';

export default class AddProduct extends Component {


    changePath = () => {
        this.props.history.push('./AddOneBedRoom');
    }
    render() {
        return (
            <div
                style={{
                    paddingTop: 55
                }}
            >


                <Header as='h1' style={{ paddingTop: 60, paddingLeft: 10 }}>Add Property</Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>


                    <Grid.Row columns={3}>

                        <Grid.Column>
                            <Card
                                onClick={this.changePath}
                                style={{
                                    boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 40, fontWeight: 'bold', }}>
                                    <Header as='h1' style={{ color: "#000" }}>One Bed Room</Header>


                                </Card.Content>
                                {/* <Link to="/Hr_employee"></Link> */}
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card
                                     onClick={() => this.props.history.push('./AddTwoBedRoom')}
                                style={{
                                    boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 40, fontWeight: 'bold', }}>
                                    <Header as='h1' style={{ color: "#000" }}>Two Bed Room</Header>


                                </Card.Content>
                                {/* <Link to="/Hr_employee"></Link> */}
                            </Card>
                        </Grid.Column>
                        <Grid.Column>
                            <Card
                                onClick={() => this.props.history.push('./AddThreeBedRoom')}
                                style={{
                                    boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                                }}
                            >
                                <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 40, fontWeight: 'bold', }}>
                                    <Header as='h1' style={{ color: "#000" }}>Three Bed Room</Header>


                                </Card.Content>
                                {/* <Link to="/Hr_employee"></Link> */}
                            </Card>
                        </Grid.Column>


                    </Grid.Row>
                </Grid>
            </div >
        )
    }
}