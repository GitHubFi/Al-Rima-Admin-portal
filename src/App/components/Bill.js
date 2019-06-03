/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Header, Divider, Card, Icon, Grid,
    Text, CardContent, CardDescription,
    Input, Container, Label, Dropdown, Button, Segment
}
    from 'semantic-ui-react';
import { createNotificationAction, GetSignUpUser, createBillAction } from '../../store/action'


class Bill extends Component {
    constructor() {
        super();
        this.state = {
            Notification1: '',
            Notification2: '',
            Notification3: '',
            isBiling: false,
            userId: null,
            name: null,
            email: null,
            paid:'pending'
           
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
        const { Notification1, Notification2, Notification3, userId,name,paid, email } = this.state

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
            Notification3,
            userId,
            name,
            email,
            paid
        };
        console.log(obj);

        this.props.BillAction(obj);
        this.setState({
            Notification1: '',
            Notification2: '',
            Notification3: '', 
            isBiling: false,
        })
    }

    deleteRow(id,name,email) {
        console.log(id, "user idd", name, email);


        this.setState({ isBiling: true, userId: id ,name:name , email:email });
    }

  
    componentWillMount() {

        this.props.getUserListComponent();
        
        // this.props.GetUserPaymentList();
    }


    render() {

        // console.log(this.state.Notification3);
        console.log(this.state.name);
        console.log(this.state.email);



        return (
            <div>
                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                    Select user
                </Header>

                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.List !== null ?
                                this.props.List.map((data, index) =>
                                    <Grid.Column key={index}>


                                        <Card >

                                            <Card.Content style={{ backgroundColor: "#dfdada", padding: 20, fontWeight: 'bold', }}>
                                                <Header as='h1' style={{ color: "#000" }}>{data.name}
                                                </Header>
                                                {/* <Container>{data.email}</Container> */}
                                                <Container>{data.email}</Container>
                                            </Card.Content>
                                        </Card>
                                        <Button primary onClick={this.deleteRow.bind(this, data.uid , data.name, data.email)}>
                                            Add Bill</Button>
                                        {/* </Button> */}


                                    </Grid.Column>




                                )
                                : null
                        }
                    </Grid.Row>
                </Grid>
                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                    Add Bill Notification
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 20, paddingRight: 10 }}>
                    {
                        (this.state.isBiling === true) ?
                            < Grid.Row columns={3}>
                                {
                                    this.props.List.map((data) => {
                                        return (
                                            (data.uid === this.state.userId) ?
                                                <Segment >
                                                    <Header as='h2' floated='left'>
                                                        User information
                                                 </Header>
                                                    <Divider clearing />
                                                    <Grid  >
                                                        <Grid.Column>

                                                            <h4>
                                                                USER NAME:  {data.name}
                                                            </h4>
                                                            <Divider />
                                                            <h4>
                                                                USER EMAIL:   {data.email}
                                                            </h4>
                                                            <Divider />
                                                            <h4>
                                                                USER ID: {data.uid}
                                                            </h4>
                                                            <Divider />
                                                        </Grid.Column>

                                                    </Grid>
                                                </Segment>
                                                : null
                                        )
                                    })
                                }
                                <Grid.Column>
                                    <Card>
                                        <Label>
                                            Enter Heading

                            </Label>

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

                            : <Label>please Select the user for bill</Label>
                    }



                </Grid >

            </div >
        )
    }
}


function mapStateToProps(state) {
    console.log(state.reducer.notification, "++++++++++++++++state.reducer.notification+++++++++++++++++++")
    return {
        List: state.reducer.registerUserList,
        notificatiom: state.reducer.notification
    }
}
function mapDispatchToProps(dispatch) {
    return {
        BillAction: (obj) => dispatch(createBillAction(obj)),
        getUserListComponent: () => dispatch(GetSignUpUser()),

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Bill);
// export default Notification;