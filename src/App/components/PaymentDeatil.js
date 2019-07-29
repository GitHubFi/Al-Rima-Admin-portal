/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    createPaymentAction,
    GetSignUpUser,
    createUtilityPaymentAction,
    BillAction
    // GETUSEROBJ
} from '../../store/action'

import { Header, Divider, Card, Icon, Grid, Text, CardContent, Container, CardDescription, Message } from 'semantic-ui-react';


class PaymentDetail extends Component {
    constructor() {
        super();
        this.state = {
            id: null,
            array: null,
            pending: 'pending',
            payment: 'Paid',
            Bill: null
        }
    }

    componentWillMount() {
        this.props.getPaymentDetail();
        this.props.getUtilityPaymentDetail();
        this.props.meraj();

        this.props.getUserListComponent();



    }


    render() {
        console.log(this.state.Bill)
        return (
            <div>
                <Header as='h1' style={{ paddingTop: 60, paddingLeft: 10 }}>
                    Payment Details
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.paymentDetail !== null ?
                                this.props.paymentDetail.map((data, index) =>

                                    <Grid.Column key={index}>
                                        <Card

                                            style={{
                                                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                                            }}
                                        >

                                            <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30 }}>
                                                <Message>
                                                    <Header as='h4' style={{ color: "#000" }}>
                                                        Rent For One Bed
                                            <Container style={{ fontSize: 10, fontStyle: 'italic' }}>

                                                            <text >( Saudi Riyal )</text>
                                                        </Container>
                                                    </Header>

                                                    <Divider />

                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                User Name:
                                                        </text>
                                                            {" "}  {data.name}
                                                        </Message.Item>
                                                    </Container>
                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                CVC Number:
                                                        </text>
                                                            {" "} {data.cvc}
                                                        </Message.Item>
                                                    </Container>
                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Card Number:
                                                        </text>
                                                            {" "}  {data.cardNumber}
                                                        </Message.Item>
                                                    </Container>

                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Date:
                                                        </text>
                                                            {" "}  {data.date}
                                                        </Message.Item>
                                                    </Container>
                                                    {/* <Container>
                                                

                                                        User ID: {data.user}
                                                    
                                                </Container> */}
                                                    < Container  >
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Rent For One Bed:
                                                        </text>
                                                            <text style={{ color: "blue", fontWeight: "bold" }}>

                                                                {" "}   {data.rent1}
                                                            </text>

                                                        </Message.Item>
                                                    </Container>

                                                </Message>

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
                </Grid >

                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                    Utility Payment Details
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.utilityPaymentList !== null ?
                                this.props.utilityPaymentList.map((data, index) =>

                                    <Grid.Column key={index}>
                                        <Card

                                            style={{
                                                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                                            }}
                                        >

                                            <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30 }}>
                                                <Message>
                                                <Header as='h4' style={{ color: "#000" }}>
                                                        Rent For Water Bill
                                            <Container style={{ fontSize: 10, fontStyle: 'italic' }}>

                                                            <text >( Saudi Riyal )</text>
                                                        </Container>
                                                    </Header>

                                                    <Divider />
                                                    <Container>
                                                        <Message.Item>

                                                            <text style={{ fontWeight: 'bold' }}>
                                                                User Name:
                                                        </text>
                                                            {" "} {data.name}
                                                        </Message.Item>
                                                    </Container>
                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Card Number:
                                                    </text>
                                                            {" "}  {data.cardNumber}
                                                        </Message.Item>
                                                    </Container>
                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                CVC Number:
                                                    </text>
                                                            {" "} {data.cvc}

                                                        </Message.Item>
                                                    </Container>

                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>

                                                                Date:
                                                    </text>
                                                            {" "} {data.date}

                                                        </Message.Item>
                                                    </Container>


                                                    {/* <Container>
                                                    <Message.Item>

                                                        User Id: {data.user}
                                                    </Message.Item>
                                                </Container> */}
                                                    <Container>
                                                        <Message.Item>
                                                        <text style={{ fontWeight: 'bold' }}>

                                                            status : 
                                                            </text>
                                                          {" "}  {data.paid}
                                                        </Message.Item>
                                                    </Container>
                                                    {/* <Container>
                                                    <Message.Item>

                                                        Bill Id : {data.id}
                                                    </Message.Item>
                                                </Container> */}

                                                    <Container >
                                                        <Message.Item>

                                                        <text style={{ fontWeight: 'bold' }}>

                                                            Payment:
                                                        </text>
                                                        <text style={{ color: 'green', fontFamily: 'Courier New', fontStyle: "italic" , fontWeight:'bold'}}>

                                                            {" "}    {data.payment.toUpperCase()}
                                                            </text>
                                                        </Message.Item>
                                                    </Container>
                                                </Message>


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


                {/* <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                    All Utility Bills
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.Bill !== null ?
                                this.props.Bill.map((data, index) =>

                                    <Grid.Column key={index}>
                                        <Card >

                                            <Card.Content style={{ backgroundColor: '#dfdada', padding: 30, fontWeight: 'bold' }}>

                                                <Container>
                                                    <Message.Item>

                                                        Amount:  {data.Notification1}

                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        Date:{data.Notification2}
                                                    </Message.Item>
                                                </Container>

                                                <Container>
                                                    <Message.Item>

                                                        Alert:  {data.Notification3}
                                                    </Message.Item>
                                                </Container>

                                                <Container>
                                                    <Message.Item>

                                                        user ID:   {data.userId}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        User Name:   {data.name}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        User Email:   {data.email}
                                                    </Message.Item>
                                                </Container>
                                                {

                                                    this.state.Bill.map((item) => 
                                                        (item === data.id) ?
                                                            <Container>
                                                                <Message.Item>

                                                                    Payment:
                                                        <text style={{ color: 'green' }}>

                                                                        {this.state.payment}
                                                                    </text>
                                                                </Message.Item>
                                                            </Container>
                                                            :
                                                            <Container>
                                                                <Message.Item>

                                                                    Payment:
                                                        <text style={{ color: 'red' }}>

                                                                        {this.state.pending}
                                                                    </text>
                                                                </Message.Item>
                                                            </Container>
                                                   )

                                                }
                                                
                                                 </Card.Content>


                                        </Card>
                                    </Grid.Column>

                                )
                                :
                                null

                        }

                    </Grid.Row>
                </Grid> */}





            </div >
        )
    }
}


function mapStateToProps(state) {
    console.log("All  paymentDetail**", state.reducer.utilityPaymentList) //user payment
    console.log("All  BIllDetail**", state.reducer.Bill) //user bill
    return {
        userListComponent: state.reducer.userList,
        paymentDetail: state.reducer.paymentDetail,
        serviceList: state.reducer.serviceList,
        List: state.reducer.registerUserList,
        utilityPaymentList: state.reducer.utilityPaymentList,
        Bill: state.reducer.Bill,
        // USEROBJECT: state.reducer.USEROBJECT

    }
}
function mapDispatchToProps(dispatch) {
    return {
        getPaymentDetail: () => dispatch(createPaymentAction()),
        getUserListComponent: () => dispatch(GetSignUpUser()),
        getUtilityPaymentDetail: () => dispatch(createUtilityPaymentAction()),
        meraj: () => dispatch(BillAction())


        // getUserListComponentOBJ: () => dispatch(GETUSEROBJ()),


        // getUserListComponent: () => dispatch(getUserList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PaymentDetail);
// export default Notification;