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
    createUtilityPaymentAction,
    BillAction

    // GETUSEROBJ
} from '../../store/action'

import { Header, Divider, Card, Icon, Grid, Text, CardContent, Container, CardDescription, Message, Form, TextArea } from 'semantic-ui-react';


class Financial extends Component {
    constructor() {
        super();
        this.state = {
            array: null,
            meraj: null
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
        console.log("***********componentWillMount*********");

        if(this.props.paymentObject !==null){
            let meraj= this.props.paymentObject.reduce((acc, cur)=>{
                return acc+ cur
            },0)
            this.setState({
                meraj: meraj
            })
        }else{
            console.log("error")
        }


    }

    componentDidMount() {
        this.props.getPaymentDetail();
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
        console.log("*********componentDidMount***********");
    }



    render() {
                console.log(this.state.meraj,"chutouyaa")
        return (
            <div>
                
                <Header as='h1' style={{ paddingTop: 60, paddingLeft: 10 }}>
                    Financials
                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Header as='h3' style={{ paddingTop: 40, paddingLeft: 10 }}>
                        One Bed Room Rents
                            </Header>
                    <Grid.Row columns={3}>


                        {
                            this.props.paymentDetail !== null ?
                                this.props.paymentDetail.map((data, index) =>

                                    <Grid.Column key={index}>

                                        <Card
                                            style={{ boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)' }}>

                                            <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30 }}>
                                                <Message>
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

                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Rent Of One Bed:
                                                        </text>

                                                            <text style={{ color: 'blue', fontWeight: 'bold' }}>

                                                                {" "}    {data.rent1}
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


                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Header as='h3' style={{ paddingTop: 40, paddingLeft: 10 }}>
                        Two Bed Room Rents
                            </Header>
                    <Grid.Row columns={3}>


                        {
                            this.props.paymentDetail !== null ?
                                this.props.paymentDetail.map((data, index) =>

                                    <Grid.Column key={index}>

                                        <Card
                                            style={{ boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)' }}>

                                            <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30 }}>
                                                <Message>
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

                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Rent Of Two Bed:
                                                        </text>

                                                            <text style={{ color: 'blue', fontWeight: 'bold' }}>

                                                                {" "} 20000
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


                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Header as='h3' style={{ paddingTop: 40, paddingLeft: 10 }}>
                        Three Bed Room Rents
                            </Header>
                    <Grid.Row columns={3}>


                        {
                            this.props.paymentDetail !== null ?
                                this.props.paymentDetail.map((data, index) =>

                                    <Grid.Column key={index}>

                                        <Card
                                            style={{ boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)' }}>

                                            <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30 }}>
                                                <Message>
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

                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Rent Three Bed:
                                                        </text>

                                                            <text style={{ color: 'blue', fontWeight: 'bold' }}>

                                                                {" "}25000
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

                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Header as='h3' style={{ paddingTop: 40, paddingLeft: 10 }}>
                        Duplex Rents
                            </Header>
                    <Grid.Row columns={3}>


                        {
                            this.props.paymentDetail !== null ?
                                this.props.paymentDetail.map((data, index) =>

                                    <Grid.Column key={index}>

                                        <Card
                                            style={{ boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)' }}>

                                            <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30 }}>
                                                <Message>
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

                                                    <Container>
                                                        <Message.Item>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Rent Of Duplex:
                                                        </text>

                                                            <text style={{ color: 'blue', fontWeight: 'bold' }}>

                                                                {" "} 35000
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
                    Total Monthly Rent

                </Header>
                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>


                        <Grid.Column>
                            <Header as='h4' style={{ paddingTop: 40, paddingLeft: 10 }}>
                                Total Rent Of One Bed Room
                            </Header>
                            <Card style={{
                                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                            }}>

                                <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30, fontWeight: 'bold' }}>

                                    <Container >
                                        <Message>
                                            <Icon name='money' style={{ marginRight: 10 }} />

                                            {this.state.array}
                                        </Message>
                                    </Container>

                                </Card.Content>

                            </Card>
                            <Header as='h4' style={{ paddingTop: 40, paddingLeft: 10 }}>
                                Total Rent Of Two Bed Room
                            </Header>
                            <Card style={{
                                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                            }}>

                                <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30, fontWeight: 'bold' }}>

                                    <Container >
                                        <Message>
                                            <Icon name='money' style={{ marginRight: 10 }} />
                                            {this.state.array}
                                        </Message>
                                    </Container>

                                </Card.Content>

                            </Card>
                            <Header as='h4' style={{ paddingTop: 40, paddingLeft: 10 }}>
                                Total Rent Of Three Bed Room
                            </Header>
                            <Card style={{
                                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                            }}>

                                <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 30, fontWeight: 'bold' }}>

                                    <Container >
                                        <Message>

                                            <Icon name='money' style={{ marginRight: 10 }} />
                                            {this.state.array}

                                        </Message>
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
    console.log("All Payment OBJECT**", state.reducer.paymentObject) //user payment
    return {
        userListComponent: state.reducer.userList,
        paymentDetail: state.reducer.paymentDetail,
        serviceList: state.reducer.serviceList,
        List: state.reducer.registerUserList,
        paymentObject: state.reducer.paymentObject
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
export default connect(mapStateToProps, mapDispatchToProps)(Financial);
// export default Notification;