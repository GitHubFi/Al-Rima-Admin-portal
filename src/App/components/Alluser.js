/* eslint-disable no-unused-expressions */
import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import { createCustomerAction, getUserList, GetSignUpUser } from '../../store/action'
import { Header, Divider, Grid, Card, Container, Message } from 'semantic-ui-react';






class Alluser extends Component {
    constructor() {
        super();
        this.state = {
            array: [],


        }
    }

    componentWillMount() {

        this.props.getUserListComponent();
        this.props.GetUserPaymentList();
    }


    render() {

        return (
            <div>
                <Header as='h1' style={{ paddingTop: 60, paddingLeft: 10 }}>
                Mobile App Users
                </Header>

                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.List !== null ?
                                this.props.List.map((data, index) =>
                                    <Grid.Column
                                    >
                                        <Card key={index}
                                            style={{
                                                boxShadow: '0 10px 15px 0 rgba(0, 0, 0, 0.4), 0 8px 22px 0 rgba(0, 0, 0, 0.25)'
                                            }}
                                        >

                                            <Card.Content style={{ backgroundColor: '#f6f6f6', padding: 20, fontWeight: 'bold', }}>
                                                <Header as='h1' style={{ color: "#000" }}>{data.name}
                                                </Header>
                                                {/* <Container>{data.email}</Container> */}
                                                <Container>{data.email}</Container>
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
    console.log("All user MEEEADSFASDFASDFASDFASDFASDF**", state.reducer.allUserMesaage) //user

    return {
        List: state.reducer.registerUserList,
        paymentUser: state.reducer.userPaymentList,
        allUserMesaage: state.reducer.allUserMesaage,

    }
}
function mapDispatchToProps(dispatch) {
    return {
        createCustomerComponent: (obj) => dispatch(createCustomerAction(obj)),
        getUserListComponent: () => dispatch(GetSignUpUser()),
        GetUserPaymentList: () => dispatch(getUserList()), //service

        // getContactsComponent:()=>dispatch(createContactsAction())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Alluser);
// export default Alluser;