import React, { Component } from "react";
import { Button, Menu, Icon, Image, Segment, Sidebar, Header, Input, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createContactsAction } from '../../store/action'

import posed from 'react-pose';

const Box = posed.div({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 },
    hoverable: true,
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
        scale: 1.0,
        boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
    },
    press: {
        scale: 1.1,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }

});

 class MenuExampleSizeHuge extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.navigate = props.history;
        this.state = { 
            activeItem: "dashboard",
            UserMessage:null,
            len: null,
            lengthofNotification:1
         };
    }
    componentWillMount() {
        this.props.getContactsComponent()
 }
    componentDidMount(){

        if (this.props.allUserMesaage !== null) {
            const len = this.props.allUserMesaage.length
            
            this.setState({
                len:len
            });
            console.log(len,"LENGTH")
        }
        else{
          
            
            console.log("er")
    }
  
    

}
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;
          
        return (
            

                <Menu vertical size="large"  fixed="left" position="right" style={{ height: 700, backgroundColor: '#673ab7', fontSize: 15, alignItem: 'center' , paddingTop:10 }}
                    
                >

                    {/* <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item> */}
                    <Box className="box">

                        <Header as="h2"  style={{ marginTop: 15, color: "#fff", }}>
                            <div>
                                <Icon name="dashboard" style={{ margin: 10 }} />
                                Admin Dashboard
          </div>
                        </Header>
                    </Box>


                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Box className="box">

                        <Menu.Item name='services' as={Link}
                            style={{ color: "#fff", }}
                            to="/service"
                            active={activeItem === 'service'} onClick={this.handleItemClick}>
                            <div>
                                <Icon name='user' style={{ marginRight: 10 }} />
                                Service Request
</div>
                        </Menu.Item>
                    </Box>
                    <Box className="box">
                        <Menu.Item name='user' as={Link}
                            style={{ color: "#fff", }}
                            to="/alluser"
                            active={activeItem === 'user'} onClick={this.handleItemClick}>
                            <div>
                                <Icon name='user add' style={{ marginRight: 10 }} />
                                All User
</div>
                        </Menu.Item>
                    </Box>
                    <Box className="box">
                        <Menu.Item name='notification' as={Link}
                            style={{ color: "#fff", }}
                            to="/notification"
                            active={activeItem === 'notification'} onClick={this.handleItemClick}>
                            <div>
                                <Icon name='bell' style={{ marginRight: 10 }} />
                               Add Notifications 
                               
</div>
                        </Menu.Item>
                       
                        
                       
                    </Box>
                    <Box className="box">
                        <Menu.Item
                            as={Link}
                            style={{ color: "#fff", }}
                            to="/addProduct"
                            name='addProperties' active={activeItem === 'addProperties'} onClick={this.handleItemClick}>
                            <div>
                                <Icon name=' building' style={{ marginRight: 10 }} />
                                Add Property
</div>
                        </Menu.Item>
                    </Box>
                    <Box className="box">
                        <Menu.Item
                            as={Link}
                            style={{ color: "#fff", }}
                            to="/paymentdetail"
                            name='paymentdetail' active={activeItem === 'paymentdetail'} onClick={this.handleItemClick}>
                            <div>
                                <Icon name='payment' style={{ marginRight: 10 }} />
                                Payment Details
</div>
                        </Menu.Item>
                    </Box>
                    <Box className="box">
                        <Menu.Item
                            as={Link}
                            style={{ color: "#fff", }}
                            to="/userQueries"
                            name='userQueries' active={activeItem === 'userQueries'} onClick={this.handleItemClick}>
                            <div>
                                <Icon name='commenting' style={{ marginRight: 10 }} />
                                User Queries
                                {/* {
                                    this.props.allUserMesaage !== null?
                                    
                                           
                                       <text>
                                           { this.props.allUserMesaage.length - this.state.lengthofNotification}

                                       </text> 

                                    
                                    :null
                                } */}
                                
                                
                              
</div>
                        </Menu.Item>
                    </Box>
                    <Box className="box">
                        <Menu.Item
                            as={Link}
                            style={{ color: "#fff", }}
                            to="/Financial"
                            name='Financials' active={activeItem === 'Financials'} onClick={this.handleItemClick}>
                            <div>
                                <Icon name='money' style={{ marginRight: 10 }} />
                                Financials
</div>
                        </Menu.Item>
                    </Box>
                    <Box className="box">
                        <Menu.Item
                            as={Link}
                            style={{ color: "#fff", }}
                            to="/Bill"
                            name='Financials' active={activeItem === 'Financials'} onClick={this.handleItemClick}>
                            <div>
                                <Icon name='bimobject ' style={{ marginRight: 10 }} />
                                Send Bill
</div>
                        </Menu.Item>
                    </Box>

                  






                </Menu>
      
        );
    }
}

function mapStateToProps(state) {
    
    return {
       
        allUserMesaage: state.reducer.allUserMesaage
    }
}
function mapDispatchToProps(dispatch) {
    return {
      
        getContactsComponent: () => dispatch(createContactsAction())

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MenuExampleSizeHuge);
