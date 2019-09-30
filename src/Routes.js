import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './App/components/Main';
import AddProduct from './App/components/AddProduct';
import UserServiceDetail from './App/components/UserServiceDetail';
import UserQueries from './App/components/UserQueries';
import Alluser from './App/components/Alluser';
import Notification from './App/components/Notification';
import PaymentDeatil from './App/components/PaymentDeatil';
import Service from './App/components/Service';
import Financial from './App/components/Financial.js'
import Bill from './App/components/Bill.js'
import Background from './assets/back5.jpg';
import AddOneBedRoom from './App/Add_Property/AddOneBedRoom.js'
import AddTwoBedRoom from './App/Add_Property/AddTwoBedRoom.js'
import AddThreeBedRoom from './App/Add_Property/AddThreeBedRoom.js'









import TopNavBar from './App/container/TopNavBar'
import SideNavbar from './App/container/SideNavBar';
export default class Routes extends Component {
    render() {
        return (
            <Router>
                <div>
                    <div >
                        <TopNavBar />
                    </div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ flex: 1 }} >
                            <SideNavbar />
                        </div>
                        <div style={{
                            flex: 4,
                        }}
                        >
                            <div style={{
                                backgroundImage: "url(" + Background + ")",
                                height: "100%",
                                width: "110%",
                                marginTop: 5,
                                marginLeft: -22,
                                backgroundAttachment: "fixed"

                            }}
                            >
                                <Route exact path="/" component={Service} />
                                <Route  path="/service" component={Service} />
                                <Route path="/Alluser" component={Alluser} />
                                <Route path="/addProduct" component={AddProduct} />
                                <Route path="/Notification" component={Notification} />
                                <Route path="/userServiceDetail" component={UserServiceDetail} />
                                <Route path="/userQueries" component={UserQueries} />
                                <Route path="/paymentdetail" component={PaymentDeatil} />
                                <Route path="/Financial" component={Financial}></Route>
                                <Route path="/Bill" component={Bill}></Route>
                                <Route path="/AddOneBedRoom" component={AddOneBedRoom}></Route>
                                <Route path="/AddTwoBedRoom" component={AddTwoBedRoom} />
                                <Route path="/AddThreeBedRoom" component={AddThreeBedRoom} />



                            </div>





                        </div>
                    </div>

                </div>
            </Router>
        )
    }
}