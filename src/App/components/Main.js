/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { Header, Divider, Card, Grid,
    
    Group,
    Button , Image, Placeholder

} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { createCustomerAction, getUserList, GetAllNotification } from '../../store/action'



class Main extends Component {
    constructor() {
        super();
        this.state = {
            nameArray: '',
           
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
                <Header as='h1' style={{  paddingTop: 60, paddingLeft: 10 }}>Dashboard</Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>


                    <Grid.Row columns={3}>

                        <Grid.Column >
                            <Card style={{
                                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                            }}>

                                <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30, fontWeight: 'bold' }}>
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
export default connect(mapStateToProps, mapDispatchToProps)(Main);