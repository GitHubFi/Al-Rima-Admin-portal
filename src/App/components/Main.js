/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Header, Divider, Card, Icon, Grid, GridRow, Button, Modal, Form, Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createCustomerAction, getUserList ,GetAllNotification} from '../../store/action'
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

class Main extends Component {
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
                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>Dashboard</Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>


                    <Grid.Row columns={3}>
                       
                                    <Grid.Column >
                                        <Card >

                                            <Card.Content style={{ backgroundColor: '#dfdada', padding: 30, fontWeight: 'bold' }}>
{/* 
                                                <Container>Address: </Container>
                                                <Container>Date:</Container>
                                                <Container>Description:</Container>
                                                <Container>Hose No: </Container>
                                                <Container>Phone Number: </Container>
                                                <Container>Service: </Container>
                                                <Container>Time Slot: </Container>
                                                <Container>User ID:</Container> */}

                                            </Card.Content>

                                        </Card>
                                    </Grid.Column>
                               
                
                    </Grid.Row>
                </Grid>

               


            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log("REGISTER USER LIST", state.reducer.registerUserList);
    console.log("REGISTER USER SERVICES LIST", state.reducer.serviceList);
    console.log(state.reducer.notification,"++++++++++++++++state.reducer.notification+++++++++++++++++++")


    return {
        userListComponent: state.reducer.serviceList,
        List: state.reducer.registerUserList,
        notification:state.reducer.notification
    }
}
function mapDispatchToProps(dispatch) {
    return {
        createCustomerComponent: (obj) => dispatch(createCustomerAction(obj)),
        getUserListComponent: () => dispatch(getUserList()),
        getAllNotification:()=>dispatch(GetAllNotification())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);