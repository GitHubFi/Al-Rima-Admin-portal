import React, { Component } from 'react';
import { Button, Dropdown, Menu, Icon, Header } from 'semantic-ui-react';
export default class TopNavBar extends Component {
    state = {
        activeItem: 'home'
    }
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state
        return (
            <Menu size='large'>
                <Menu.Menu position='left'>
                    <Header as='h3' style={{ paddingTop: 10, paddingLeft: 10 }}>
                        <img src={require('../../assets/logoB.png')} alt="loading..." style={{ width: 100 }} />
                    </Header>
                </Menu.Menu>
                <Menu.Menu position='right'>
                    <Dropdown item trigger={<Icon name='envelope' />}>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item trigger={<Icon name='align justify' />}>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item trigger={<Icon name='bell' />}>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown item trigger={<Icon name='user' />}>
                        <Dropdown.Menu>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Russian</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </Menu.Menu>
            </Menu>
        )
    }
}