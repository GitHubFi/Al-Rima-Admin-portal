// import React, { Component } from 'react'

// class Financial extends Component {
//     render () {
//         return (
//             <div>

//                 <h1>Financial</h1>
//             </div>
//         )
//     }
// }

// export default Financial

/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    createPaymentAction,
    GetSignUpUser,
    // GETUSEROBJ
} from '../../store/action'

import { Header, Divider, Card, Icon, Grid, Text, CardContent, Container, CardDescription, Message } from 'semantic-ui-react';


class Financial extends Component {
    constructor() {
        super();
        this.state = {
            array: null
        }
    }

    componentWillMount() {
        this.props.getPaymentDetail();
        this.props.getUserListComponent();
        // this.props.getUserListComponentOBJ()


        if (this.props.paymentDetail !== null) {
            let array = this.props.paymentDetail.reduce((acc, cur) => {
                return acc + cur.rent1
            }, 0)
            console.log(array);
            this.setState({
                array: array
            })

        } else {
            console.log("error")
        }

    }



    render() {

        return (
            <div>
                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                    Financial Statemant
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Header as='h4' style={{ paddingTop: 40, paddingLeft: 10 }}>
                                One Bed Room Customers
                            </Header>
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

                                                        Date: {data.date}
                                                    </Message.Item>
                                                </Container>

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


                {/* var data = [{costOfAirtickets: 2500, costOfHotel: 1200 }, {costOfAirtickets: 1500, costOfHotel: 1000 }];
            var result = [];
            var sum = 0;
            var costsum = 0;
        data.map(function (item, key) {
            var cost = item;
                        //nsole.log(cost);
                        sum = sum + cost.costOfAirtickets;
                        costsum = costsum + cost.costOfHotel;
            
                    });
            
        result = [{costOfAirtickets: sum, costOfHotel: costsum }];
                
                        console.log(result); */}
                {/* <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                    Total Income
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.paymentDetail !== null ?
                                this.props.paymentDetail.map((item, key) => {

                                    let sum = 0
                                    let cost = item;
                                    sum = sum + cost.rent1 + cost.rent1 + cost.rent1;
                                    return (
                                        <Grid.Column key={key}>
                                            <Card >

                                                <Card.Content style={{ backgroundColor: 'gray', padding: 30, fontWeight: 'bold' }}>

                                                    <Container >
                                                        <Message.Item>

                                                            {this.state.array}
                                                        </Message.Item>
                                                    </Container>
                                                    
                                                </Card.Content>

                                            </Card>
                                        </Grid.Column>
                                    )
                                    // console.log(sum+sum)
                                })
                                : null

                        }
                    </Grid.Row>
                </Grid> */}

                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                    Total Income
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>


                        <Grid.Column>
                            <Header as='h4' style={{ paddingTop: 40, paddingLeft: 10 }}>
                                Total Rent of one bed room
                            </Header>
                            <Card >

                                <Card.Content style={{ backgroundColor: '#dfdada', padding: 30, fontWeight: 'bold' }}>

                                    <Container >
                                        <Message.Item>

                                            {this.state.array}
                                        </Message.Item>
                                    </Container>

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
    console.log("All  USEROBJECT**", state.reducer.INCOME) //user payment
    return {
        userListComponent: state.reducer.userList,
        paymentDetail: state.reducer.paymentDetail,
        serviceList: state.reducer.serviceList,
        List: state.reducer.registerUserList
        // USEROBJECT: state.reducer.USEROBJECT

    }
}
function mapDispatchToProps(dispatch) {
    return {
        getPaymentDetail: () => dispatch(createPaymentAction()),
        getUserListComponent: () => dispatch(GetSignUpUser()),
        // getUserListComponentOBJ: () => dispatch(GETUSEROBJ()),


        // getUserListComponent: () => dispatch(getUserList())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Financial);
// export default Notification;