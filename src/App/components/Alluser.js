/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createCustomerAction, getUserList,GetSignUpUser } from '../../store/action'
import { Header, Divider, Grid, Card, Item,Container } from 'semantic-ui-react';






class Alluser extends Component {
    constructor() {
        super();
        this.state = {
            array:[],


        }
    }

    componentWillMount() {

        this.props.getUserListComponent();
        this.props.GetUserPaymentList();
     }
         

    render() {
        
        return (
            <div>
                <Header as='h1' style={{ paddingTop: 40, paddingLeft: 10 }}>
                   All User
                </Header>

                <Divider inverted />
                <Grid divided='vertically'
                    style={{ paddingLeft: 10, paddingRight: 10 }}>
                    <Grid.Row columns={3}>
                        {
                            this.props.List !== null ?
                                this.props.List.map((data, index) =>
                                    <Grid.Column>
                                        <Card key={index}>

                                            <Card.Content style={{ backgroundColor: '#dfdada', padding: 20,fontWeight: 'bold', }}>
                                                <Header as='h1' style={{ color: "#000" }}>{data.name}
                                                </Header>
                                                {/* <Container>{data.email}</Container> */}
                                                <Container>{data.email}</Container>
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
    console.log("All user MEEEADSFASDFASDFASDFASDFASDF**", state.reducer.allUserMesaage) //user
    
    return {
        List: state.reducer.registerUserList,
        paymentUser:state.reducer.userPaymentList,
        allUserMesaage:state.reducer.allUserMesaage,
       
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