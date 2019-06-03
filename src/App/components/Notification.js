/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Header, Divider, Card, Icon, Grid, Text, CardContent, CardDescription, Input, Container,Label } from 'semantic-ui-react';
import { createNotificationAction } from '../../store/action'


class Notification extends Component {
    constructor() {
        super();
        this.state = {
            Notification1: '',
            Notification2: '',
            Notification3: ''
        }
    }


    handleInputChange = (e) => {
        this.setState({
            Notification1: e.target.value,

        });

    }
    handleInputChange1 = (e) => {
        this.setState({
            Notification2: e.target.value,

        });

    }
    handleInputChange2 = (e) => {
        this.setState({
            Notification3: e.target.value,

        });

    }

    submit = () => {
        const { Notification1, Notification2, Notification3 } = this.state

        if (Notification1 === '') {
            alert("Please fill the information");
            return;
        } else if (Notification2 === '') {
            alert("Please fill the another one");
            return;
        } else if (Notification3 === '') {
            alert("Please fill the last input");
            return;
        }
        let obj = {
            Notification1,
            Notification2,
            Notification3
        };
        console.log(obj);

        this.props.NotificationAction(obj);
        this.setState({
            Notification1: '',
            Notification2: '',
            Notification3: '',
        })
    }
    render() {
        console.log(this.state.Notification1);
        console.log(this.state.Notification2);
        console.log(this.state.Notification3);



        return (
            <div>
                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10}}>
                  Add Notifications
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>

                        <Grid.Column>
                            <Card>
                            <Label>
                                Enter Heading
                                    
                            </Label>

                                {/* <Card.Content style={{ backgroundColor: 'blue', padding: 40 }}> */}
                                {/* <Header as='h1' style={{ color: "#fff" }}>Add Notification</Header> */}
                                {/* Add Information */}
                                {/* </Card.Content> */}
                                <div className="ui focus input">
                                    <input type="text" placeholder="Enter notification..."
                                        onChange={this.handleInputChange}
                                        value={this.state.Notification1}
                                        style={{ padding: 10 }}

                                    /></div>

                            </Card>
                            <Card>

                                <Label>Enter Content</Label>

                                <div className="ui focus input">
                                    <input type="text" placeholder=" Enter notification..."
                                        onChange={this.handleInputChange1}
                                        value={this.state.Notification2}

                                        style={{ padding: 10 }} /></div>
                            </Card>
                            <Card>
                                <Label>Enter Detail</Label>


                                <div className="ui focus input">
                                    <input type="text" placeholder="Enter notification..."
                                        onChange={this.handleInputChange2}
                                        value={this.state.Notification3}
                                        style={{ padding: 10 }} /></div>

                            </Card>



                            <div>
                                <button className="ui primary button"
                                    style={{ padding: 10 }}
                                    onClick={this.submit}
                                >Submit</button>

                            </div>

                        </Grid.Column>





                    </Grid.Row>
                </Grid >



            </div >
        )
    }
}


function mapStateToProps(state) {
    console.log(state.reducer.notification, "++++++++++++++++state.reducer.notification+++++++++++++++++++")
    return {
        userListComponent: state.reducer.userList,
        notificatiom: state.reducer.notification
    }
}
function mapDispatchToProps(dispatch) {
    return {
        NotificationAction: (obj) => dispatch(createNotificationAction(obj)),
        // getUserListComponent: () => dispatch(getUserList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Notification);
// export default Notification;