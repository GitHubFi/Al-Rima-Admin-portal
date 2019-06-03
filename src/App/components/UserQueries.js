import React, { Component } from 'react';

import { connect } from 'react-redux';
import { createContactsAction } from '../../store/action'
import { Header, Divider, Grid, Card, Item, Container ,Message} from 'semantic-ui-react';

class UserQueries extends Component {

    componentWillMount() {

        // this.props.getUserListComponent();
        // this.props.GetUserPaymentList();
        this.props.getContactsComponent()





    }
    render() {
        return (
            <div>
                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                    User Queries
                </Header>

                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 0 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.allUserMesaage !== null ?
                                this.props.allUserMesaage.map((data, index) =>
                                    <Grid.Column key={index}>
                                        <Card >

                                            <Card.Content style={{ backgroundColor: '#dfdada', padding: 30, fontWeight: 'bold', }}>
                                                <Header as='h1' style={{ color: "#000" }}>{data.name}</Header>
                                               
                                                        
                                                    <Message.Item>
                                                        Email:
                                                {data.email}
                                                    </Message.Item>
                                                    <Message.Item>
                                                        Cotact No:
                                                {data.contactNo}
                                                    </Message.Item>
                                                    <Message.Item>

                                                        Description:
                                                    {data.description}
                                                    </Message.Item>
                                                    <Message.Item>
                                                        Subject:
                                                    {data.subject}
                                                    </Message.Item>
                                                    {/* <Message.Item>
                                                         ID:
                                                    {data.user}
                                                    </Message.Item> */}

                                               
                                            </Card.Content>

                                        </Card>


                                    </Grid.Column>




                                )
                                : null
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