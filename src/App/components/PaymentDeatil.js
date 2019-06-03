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

    componentWillMount() {
        this.props.getPaymentDetail();
        this.props.getUtilityPaymentDetail();
        this.props.meraj();

        this.props.getUserListComponent();
       
        // if (this.props.utilityPaymentList !== null) {
        //     let array = this.props.utilityPaymentList.reduce((acc, cur) => {
        //         return acc + cur.rent1
        //     }, 0)
        //     console.log(array);
        //     this.setState({
        //         array: array
        //     })

        // } else {
        //     console.log("error")
        // }


    }
    render() {
        return (
            <div>
                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                    Payment Detail
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.paymentDetail !== null ?
                                this.props.paymentDetail.map((data, index) =>

                                    <Grid.Column key={index}>
                                        <Card >

                                            <Card.Content style={{ backgroundColor: '#dfdada', padding: 30, fontWeight: 'bold' }}>

                                                <Container>
                                                    <Message.Item>

                                                        User Name: {data.name}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        CVC Number: {data.cvc}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        Card Number: {data.cardNumber}
                                                    </Message.Item>
                                                </Container>

                                                <Container>
                                                    <Message.Item>

                                                        Date: {data.date}
                                                    </Message.Item>
                                                </Container>
                                                {/* <Container>
                                                    <Message.Item>

                                                        User ID: {data.user}
                                                    </Message.Item>
                                                </Container> */}
                                                <Container>
                                                    <Message.Item>

                                                        Rent For One Bed: {data.rent1}
                                                    </Message.Item>
                                                </Container>



                                            </Card.Content>

                                        </Card>
                                    </Grid.Column>

                                )
                                :
                                null

                        }



                    </Grid.Row>
                </Grid>

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
                                        <Card >

                                            <Card.Content style={{ backgroundColor: '#dfdada', padding: 30, fontWeight: 'bold' }}>

                                                <Container>
                                                    <Message.Item>

                                                        User Name: {data.name}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        Card Number: {data.cardNumber}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        CVC Number: {data.cvc}
                                                    </Message.Item>
                                                </Container>

                                                <Container>
                                                    <Message.Item>

                                                        Date: {data.date}
                                                    </Message.Item>
                                                </Container>


                                                <Container>
                                                    <Message.Item>

                                                        User Id: {data.user}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        status : {data.paid}
                                                    </Message.Item>
                                                </Container>

                                                <Container >
                                                    <Message.Item

                                                    >

                                                        Payment:
                                                        <text style={{ color: 'green' }}>

                                                            {data.payment}
                                                        </text>
                                                    </Message.Item>
                                                </Container>


                                            </Card.Content>

                                        </Card>
                                    </Grid.Column>

                                )
                                :
                                <Container>
                                    <Message.Item>

                                        no data found
                                </Message.Item>
                                </Container>

                        }



                    </Grid.Row>
                </Grid>


                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
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

                                                        User Name:   { data.name}
                                                    </Message.Item>
                                                </Container>
                                                <Container>
                                                    <Message.Item>

                                                        User Email:   { data.email}
                                                    </Message.Item>
                                                </Container>
                                              


                                                {
                                                    this.props.utilityPaymentList !== null ?
                                                        this.props.utilityPaymentList.map((item) =>
                                                            ( item.user === data.userId) ?
                                                                <Container>
                                                                    <Message.Item>
                                                                        Payment:
                                                                        <text style={{ color: 'green' }}>

                                                                            {item.payment}
                                                                        </text>
                                                                    </Message.Item>
                                                                </Container>
                                                               :
                                                               
                                                              <Container>
                                                               <Message.Item>
                                                                   
                                                               <text style={{ color: 'red' }}>
   
                                                               Payment:    { data.paid}
                                                               </text>
                                                               </Message.Item>
                                                           </Container>
                                                        )
                                                        :null
                                                        
                                                }




                                            </Card.Content>

                                        </Card>
                                    </Grid.Column>

                                )
                                :
                                null

                        }

                    </Grid.Row>
                </Grid>



            </div>
        )
    }
}


function mapStateToProps(state) {
    // console.log("All  USEROBJECT**", state.reducer.INCOME) //user payment
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