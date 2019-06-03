import React, { Component } from "react";
import { Button, Menu, Icon, Image, Segment, Sidebar, Header, Input, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
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

export default class MenuExampleSizeHuge extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.navigate = props.history;
        this.state = { activeItem: "dashboard" };
    }


    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu vertical size="large" style={{ height: 700, backgroundColor: '#673ab7', fontSize: 15, alignItem: 'center' }}>

                {/* <Menu.Item>
                    <Input icon='search' placeholder='Search mail...' />
                </Menu.Item> */}
                <Box className="box">

                    <Header as="h2" to="/" as={Link} style={{ marginTop: 15, color: "#fff", }}>
                        <div>
                            <Icon name="dashboard" style={{ margin: 10 }} />
                            Admin Dashboard
          </div>
                    </Header>
                </Box>
                {/* <Menu.Item name='dashboard' as={Link}
                style={{  color: "#fff",   }}
                    to="/"
                    active={activeItem === 'dashboard'} onClick={this.handleItemClick}>
                    <div>
                        <Icon name='dashboard' style={{ marginRight: 10 }} />
                        Dashboard
</div>
                </Menu.Item> */}

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
                            Notifications
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
                            Financial
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
                            Bill
</div>
                    </Menu.Item>
                </Box>






            </Menu>
        );
    }
}
