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
                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>Requested Service List</Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>


                    <Grid.Row columns={3}>
                        {
                            this.props.userListComponent !== null ?
                                this.props.userListComponent.map((data, index) =>
                                    <Grid.Column key={index}>
                                        <Card >

                                            <Card.Content style={{ backgroundColor: '#dfdada', padding: 20, fontWeight: 'bold' }}>

                                                <Container>
                                                    <Message.Item>

                                                        Address: {data.address}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        Date:{data.chosenDate}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>
                                                        Description: {data.description}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                <Message.Item>
                                                Service: {data.serviceRequired}
                                                </Message.Item>
                                                
                                                
                                                    </Container>
                                                    <Container>
                                                <Message.Item>
                                                Hose No: {data.houseNo}
                                                </Message.Item>
                                                
                                                 
                                                    </Container>

                                                    <Container>
                                                <Message.Item>
                                                Phone Number: {data.pNumber}
                                                </Message.Item>
                                                
                                                 
                                                    </Container>
                                                    <Container>
                                                <Message.Item>
                                                Time Slot: {data.timeSlot}
                                                </Message.Item>
                                                
                                                 
                                                    </Container>
                                                    
                                               

                                            </Card.Content>

                                        </Card>
                                    </Grid.Column>
                                )
                                :   

                                  

                                        <Container>
                                            <Message.Item>

                                              No data found
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