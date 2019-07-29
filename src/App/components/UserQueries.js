import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createContactsAction } from '../../store/action'
import { Header, Divider, Grid, Card, Item, Container, Message } from 'semantic-ui-react';

class UserQueries extends Component {
    constructor() {
        super();
        this.state = {
            len: null
        }

    }

    componentWillMount() {

        // this.props.getUserListComponent();
        // this.props.GetUserPaymentList();
        this.props.getContactsComponent()





    }

    render() {

        return (
            <div>
                <Header as='h1' style={{ paddingTop: 60, paddingLeft: 10 }}>
                    Contact Form Queries
                </Header>

                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 0 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.allUserMesaage !== null ?
                                this.props.allUserMesaage.map((data, index) =>
                                    <Grid.Column key={index}>
                                        <Card
                                            style={{
                                                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)',
                                                fontSize: 12,
                                                
                                            }}
                                        >

                                            <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 16 }}>
                                                <Message>


                                                    <Header as='h2' style={{ color: "#000" }}>{data.name}</Header>

                                                    <Divider />
                                                    <Container style={{padding:2}}>

                                                        <Message>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Email:
                                                        </text>
                                                            {" "}  {data.email}
                                                        </Message>
                                                    </Container>


                                                    <Container style={{padding:2}}>

                                                        <Message>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Contact No:
                                                        </text>
                                                            {" "} {data.contactNo}
                                                        </Message>
                                                    </Container>


                                                    <Container style={{padding:2}}>
                                                        <Message>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Subject:
                                                        </text>

                                                            {" "}  {data.subject}
                                                        </Message>
                                                    </Container>

                                                    <Container style={{padding:2}}>
                                                        <Message>
                                                            <text style={{ fontWeight: 'bold' }}>
                                                                Description:
                                                        </text>

                                                            {" "} {data.description}
                                                        </Message>
                                                    </Container>
                                                    {/* <Message.Item>
                                                    Length:
                                                    {index.reverse()}
                                                </Message.Item> */}

                                                </Message>

                                            </Card.Content>

                                        </Card>


                                    </Grid.Column>




                                )
                                : <Container>
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
    console.log("All user**", state.reducer.userPaymentList) //user payment
    console.log("All user**", state.reducer.registerUserList) //user
    return {
        List: state.reducer.registerUserList,
        paymentUser: state.reducer.userPaymentList,
        allUserMesaage: state.reducer.allUserMesaage
    }
}
function mapDispatchToProps(dispatch) {
    return {
        // createCustomerComponent: (obj) => dispatch(createCustomerAction(obj)),
        // getUserListComponent: () => dispatch(GetSignUpUser()),
        getContactsComponent: () => dispatch(createContactsAction())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UserQueries);