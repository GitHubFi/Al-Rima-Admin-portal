/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Header, Divider, Card, Icon, Grid, GridRow, Button, Modal, Form, Container, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createCustomerAction, getUserList, GetAllNotification } from '../../store/action'
// const optionsSex = [
//     { key: 'm', text: 'Male', value: 'male' },
//     { key: 'f', text: 'Female', value: 'female' },
// ]

// const optionCountry = [
//     {
//         key: 'pk', text: 'Pakistan', value: 'pakistan'
//     },
//     {
//         key: 'af', text: 'Afghanistan', value: 'afghanistan'
//     }, {
//         key: 'iq', text: 'Iraq', value: 'iraq'
//     }, {
//         key: 'qa ', text: 'Qatar', value: 'qatar'
//     }, {
//         key: 'sa', text: 'Saudi Arabia', value: 'saudi arabia'
//     }, {
//         key: 'sd', text: 'Sudan', value: 'sudan'
//     }, {
//         key: 'lk', text: 'Srilanka', value: 'srilanka'
//     }, {
//         key: 'ch', text: 'Switzerland', value: 'switzerland'
//     },
// ]
// const optionInstallment = [
//     {
//         key: 'true', text: 'True', value: 'true'
//     },
//     {
//         key: 'false', text: 'False', value: 'false'
//     },
// ]

class Service extends Component {
    constructor() {
        super();
        this.state = {
            nameArray: ''
        }

    }


    componentWillMount() {
        this.props.getUserListComponent();
        this.props.getAllNotification()
    }

    componentDidMount() {
    }

    render() {

        return (

            <div >
                <Header as='h1' style={{ paddingTop: 60, paddingLeft: 10 }}>Requested Service List</Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>


                    <Grid.Row columns={3}>
                        {
                            this.props.userListComponent !== null ?
                                this.props.userListComponent.map((data, index) =>
                                    <Grid.Column key={index}>
                                        <Card
                                            style={{
                                                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)',
                                                fontSize:12
                                                
                                            }}
                                        >

                                            <Card.Content style={{
                                                backgroundColor: '#f6f6f6', padding: 16,
                                                // fontWeight: 'bold',
                                            }}>

                                                <Container style={{padding:2}}>
                                                    <Message>
                                                        <text style={{fontWeight: 'bold'}}>
                                                        Address: 
                                                        </text>
                                                    
                                                        {" "} { data.address}
                                                    </Message>
                                                    
                                                </Container>
                                                <Container style={{padding:2}}>
                                                    <Message>
                                                    <text style={{fontWeight: 'bold'}}>
                                                        Date: 
                                                    </text>
                                                    {" "} {data.chosenDate}
                                                    </Message>
                                                </Container>
                                                <Container style={{padding:2}}>
                                                    <Message>
                                                    <text style={{fontWeight: 'bold'}}>
                                                        Description: 
                                                        </text>
                                                        {" "}  {data.description}
                                                    </Message>
                                                </Container>
                                                <Container style={{padding:2}}>
                                                    <Message>
                                                    <text style={{fontWeight: 'bold'}}>
                                                        Service: {data.serviceRequired}
                                                        </text>
                                                        {" "}    {data.serviceRequired}
                                                    </Message>


                                                </Container>
                                                <Container style={{padding:2}}>
                                                    <Message>
                                                    <text style={{fontWeight: 'bold'}}>
                                                        Hose No: 
                                                        </text>
                                                        {" "} {data.houseNo}
                                                    </Message>


                                                </Container>

                                                <Container style={{padding:2}}>
                                                    <Message>
                                                    <text style={{fontWeight: 'bold'}}>
                                                        Phone Number: 
                                                        </text>
                                                        {" "} {data.pNumber}
                                                    </Message>


                                                </Container>
                                                <Container style={{padding:2}}>
                                                    <Message>
                                                    <text style={{fontWeight: 'bold'}}>
                                                        Time Slot: 
                                                        </text>
                                                        {" "}  {data.timeSlot}
                                                    </Message>


                                                </Container>



                                            </Card.Content>

                                        </Card>
                                    </Grid.Column>
                                )
                                :



                                <Container>
                                    <Message.Item>

                                        Connection Failed
                                            </Message.Item>
                                </Container>


                        }
                    </Grid.Row>
                </Grid>




            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("REGISTER USER LIST", state.reducer.registerUserList);
    console.log("REGISTER USER SERVICES LIST", state.reducer.serviceList);
    console.log(state.reducer.notification, "++++++++++++++++state.reducer.notification+++++++++++++++++++")


    return {
        userListComponent: state.reducer.serviceList,
        List: state.reducer.registerUserList,
        notification: state.reducer.notification
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createCustomerComponent: (obj) => dispatch(createCustomerAction(obj)),
        getUserListComponent: () => dispatch(getUserList()),
        getAllNotification: () => dispatch(GetAllNotification())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Service);