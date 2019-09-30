import React, { Component } from 'react'

import { Divider, Header, Form, Button, Image, Progress, Segment, Item, Loader, Grid, Portal } from 'semantic-ui-react';
import dbConfig from '../../config';
import { storage } from '../../config'
const src = 'https://semantic-ui.com/images/wireframe/image.png'

class AddThreeBedRoom extends Component {
    constructor() {
        super();
        this.state = {
            Notification1: '',
            Notification2: '',
            Notification3: '',
            // open: false,
            uid: '',
            image: null,
            image1: null,
            image2: null,
            image3: null,
            image4: null,
            progress: 0,
            progress1: 0,
            progress2: 0,
            progress3: 0,
            progress4: 0,

            url: null,
            url1: null,
            url2: null,
            url3: null,
            url4: null,
            error_message: null,
            name: '',
            price: '',
            address: '',
            imageObj: null,
            imageObj1: null,
            imageObj2: null,
            imageObj3: null,
            imageObj4: null,
            open: false


        }
    }

    handleClose = () => this.setState({ open: false })
    handleOpen = () => this.setState({ open: true })

    handleChangeFile = (e) => {
        if (e.target.files[0]) {

            const image = e.target.files
            this.setState({
                imageObj: e.target.files[0]
            })
            let reader = new FileReader();
            reader.readAsDataURL(image[0]);

            reader.onload = (e) => {
                console.log("image data", e.target.result)
                this.setState({
                    image: e.target.result
                });
            }
        }
        if (e.target.files[1]) {
            const image = e.target.files
            this.setState({
                imageObj1: e.target.files[1]
            })
            let reader = new FileReader();
            reader.readAsDataURL(image[1]);

            reader.onload = (e) => {
                console.log("image data", e.target.result)
                this.setState({
                    image1: e.target.result
                })
            }
        }
        if (e.target.files[2]) {
            const image = e.target.files
            this.setState({
                imageObj2: e.target.files[2]
            })
            let reader = new FileReader();
            reader.readAsDataURL(image[2]);

            reader.onload = (e) => {
                console.log("image data", e.target.result)
                this.setState({
                    image2: e.target.result
                })
            }
        }
        if (e.target.files[3]) {
            const image = e.target.files
            this.setState({
                imageObj3: e.target.files[3]
            })
            let reader = new FileReader();
            reader.readAsDataURL(image[3]);

            reader.onload = (e) => {
                console.log("image data", e.target.result)
                this.setState({
                    image3: e.target.result
                })
            }
        }
        if (e.target.files[4]) {
            const image = e.target.files
            this.setState({
                imageObj4: e.target.files[4]
            })
            let reader = new FileReader();
            reader.readAsDataURL(image[4]);

            reader.onload = (e) => {
                console.log("image data", e.target.result)
                this.setState({
                    image4: e.target.result
                })
            }
        }
        if (e.target.files[5]) {
            alert("maximun 5 images")
        }
    }
    handleUpload = () => {
        const { image, imageObj, imageObj1, imageObj2, imageObj3, imageObj4, name, price, address } = this.state;


        if (image === null || imageObj1 === null || imageObj2 === null) {
            alert("Select atleast three images")

        } else if (image !== null || imageObj !== null) {


            const uploadTask = storage.ref(`Bed_One/images/${imageObj.name}`).put(imageObj);
            uploadTask.on('state_changed',
                (snapshot) => {
                    // progrss function....
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 200);
                    this.setState({ progress: progress })
                },
                (error) => {
                    console.log(error);
                    this.setState({ error_message: error.message })
                },
                () => {
                    // complete function...
                    storage.ref(`Bed_One/images`).child(imageObj.name).getDownloadURL().then(url => {
                        console.log(url);
                        this.setState({
                            url,

                            progress: null,
                            image: null,
                            imageObj: null

                        })
                    }).then(() => {

                        // dbConfig.database().ref("realState/Add_Property").child(`Bed_one_property`).push({
                        //     url: this.state.url,
                        //     url1: this.state.url2,
                        //     url2: this.state.url2,
                        //     url3: this.state.url3,
                        //     url4: this.state.url4,
                        //     name: name,
                        //     price: price,
                        //     address: address

                        // }).then(() => {
                        //     this.setState({

                        //         name: '',
                        //         price: '',
                        //         address: ''

                        //     })
                        // })
                        this.setState({

                            progress: null,
                            image: null,
                            imageObj: null,
                            open: true

                        })


                    })
                })


            const uploadTask1 = storage.ref(`Bed_One/images/${imageObj1.name}`).put(imageObj1);
            uploadTask1.on('state_changed',
                (snapshot) => {
                    // progrss function....
                    const progress1 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({ progres1: progress1 })
                },
                (error) => {
                    console.log(error);
                    this.setState({ error_message: error.message })
                },
                () => {
                    // complete function...
                    storage.ref(`Bed_One/images`).child(imageObj1.name).getDownloadURL().then(url1 => {
                        console.log(url1);
                        this.setState({
                            url1,
                            progress1: null,
                            image1: null,
                            imageObj1: null
                        })
                    }).then(() => {

                        // dbConfig.database().ref("realState/Add_Property").child(`Bed_one_property`).push({
                        //     url1: this.state.url1,
                        // })
                        this.setState({
                            // url1,
                            progress1: null,
                            image1: null,
                            imageObj1: null,
                            open: true
                        })
                    })
                })
            const uploadTask2 = storage.ref(`Bed_One/images/${imageObj2.name}`).put(imageObj2);
            uploadTask2.on('state_changed',
                (snapshot) => {
                    // progrss function....
                    const progress2 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({ progress2: progress2 })
                },
                (error) => {
                    console.log(error);
                    this.setState({ error_message: error.message })
                },
                () => {
                    // complete function...
                    storage.ref(`Bed_One/images`).child(imageObj2.name).getDownloadURL().then(url2 => {
                        console.log(url2);
                        this.setState({
                            url2,
                            progress2: null,
                            image2: null,
                            imageObj2: null
                        })
                    }).then(() => {

                        dbConfig.database().ref("realState/Add_Property").child(`Bed_three_property`).push({
                            url: this.state.url,
                            url1: this.state.url2,
                            url2: this.state.url2,
                            // url3: this.state.url3,
                            // url4: this.state.url4,
                            name: name,
                            price: price,
                            address: address

                        })
                        this.setState({
                            // url2,
                            progress2: null,
                            image2: null,
                            imageObj2: null,
                            open: true
                        })
                    }).then(() => {
                        this.setState({

                            name: '',
                            price: '',
                            address: ''

                        })
                    })
                })

            if (imageObj3 !== null) {


                const imageObj3 = this.state.imageObj3
                const uploadTask3 = storage.ref(`Bed_One/images/${imageObj3.name}`).put(imageObj3);
                uploadTask3.on('state_changed',
                    (snapshot) => {
                        // progrss function....
                        const progress3 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        this.setState({ progress3: progress3 })
                    },
                    (error) => {
                        console.log(error);
                        this.setState({ error_message: error.message })
                    },
                    () => {
                        // complete function...
                        storage.ref(`Bed_One/images`).child(imageObj3.name).getDownloadURL().then(url3 => {
                            console.log(url3);
                            this.setState({
                                url3,
                                progress3: null,
                                image3: null,
                                imageObj3: null
                            })
                        }).then(() => {


                            // dbConfig.database().ref("realState/Add_Property").child(`Bed_one_property`).push({
                            //     url3: this.state.url3,
                            // })
                            this.setState({
                                // url3,
                                progress3: null,
                                image3: null,
                                imageObj3: null,
                                open: true
                            })
                        })
                    })
            }
            if (imageObj4 !== null) {
                const uploadTask4 = storage.ref(`Bed_One/images/${imageObj4.name}`).put(imageObj4);
                uploadTask4.on('state_changed',
                    (snapshot) => {
                        // progrss function....
                        const progress4 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                        this.setState({ progress4: progress4 })
                    },
                    (error) => {
                        console.log(error);
                        this.setState({ error_message: error.message })
                    },
                    () => {
                        // complete function...
                        storage.ref(`Bed_One/images`).child(imageObj4.name).getDownloadURL().then(url4 => {
                            console.log(url4);
                            this.setState({
                                url4,
                                progress4: null,
                                image4: null,
                                imageObj4: null
                            })
                        }).then(() => {

                            // dbConfig.database().ref("realState/Add_Property").child(`Bed_one_property`).push({
                            //     url4: this.state.url4,
                            // });
                            this.setState({
                                // url4,
                                progress4: null,
                                image4: null,
                                imageObj4: null,
                                open: true
                            })
                        })
                    })
            }

        } else if (imageObj1 !== null) {

            // const uploadTask = storage.ref(`Bed_One/images/${imageObj1.name}`).put(imageObj1);
            // uploadTask.on('state_changed',
            //     (snapshot) => {
            //         // progrss function....
            //         const progress1 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            //         this.setState({ progres1: progress1 })
            //     },
            //     (error) => {
            //         console.log(error);
            //         this.setState({ error_message: error.message })
            //     },
            //     () => {
            //         // complete function...
            //         storage.ref(`Bed_One/images`).child(imageObj1.name).getDownloadURL().then(url1 => {
            //             console.log(url1);
            //             this.setState({
            //                 url1,
            //                 progress1: null,
            //                 image1: null,
            //                 imageObj1: null
            //             })
            //         }).then(() => {

            //             // dbConfig.database().ref("realState/Add_Property").child(`Bed_one_property`).push({
            //             //     url1: this.state.url1,
            //             // })
            //             this.setState({
            //                 // url1,
            //                 progress1: null,
            //                 image1: null,
            //                 imageObj1: null,
            //                 open: true
            //             })
            //         })
            //     })

        } else if (imageObj2 !== null) {

            // const uploadTask = storage.ref(`Bed_One/images/${imageObj2.name}`).put(imageObj2);
            // uploadTask.on('state_changed',
            //     (snapshot) => {
            //         // progrss function....
            //         const progress2 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            //         this.setState({ progress2: progress2 })
            //     },
            //     (error) => {
            //         console.log(error);
            //         this.setState({ error_message: error.message })
            //     },
            //     () => {
            //         // complete function...
            //         storage.ref(`Bed_One/images`).child(imageObj2.name).getDownloadURL().then(url2 => {
            //             console.log(url2);
            //             this.setState({
            //                 url2,
            //                 progress2: null,
            //                 image2: null,
            //                 imageObj2: null
            //             })
            //         }).then(() => {

            //             // dbConfig.database().ref("realState/Add_Property").child(`Bed_one_property`).push({
            //             //     url2: this.state.url2,
            //             // })
            //             this.setState({
            //                 // url2,
            //                 progress2: null,
            //                 image2: null,
            //                 imageObj2: null,
            //                 open: true
            //             })
            //         })
            //     })
        } else if (imageObj3 !== null) {

            // const uploadTask = storage.ref(`Bed_One/images/${imageObj3.name}`).put(imageObj3);
            // uploadTask.on('state_changed',
            //     (snapshot) => {
            //         // progrss function....
            //         const progress3 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            //         this.setState({ progress3: progress3 })
            //     },
            //     (error) => {
            //         console.log(error);
            //         this.setState({ error_message: error.message })
            //     },
            //     () => {
            //         // complete function...
            //         storage.ref(`Bed_One/images`).child(imageObj3.name).getDownloadURL().then(url3 => {
            //             console.log(url3);
            //             this.setState({
            //                 url3,
            //                 progress3: null,
            //                 image3: null,
            //                 imageObj3: null
            //             })
            //         }).then(() => {

            //             // dbConfig.database().ref("realState/Add_Property").child(`Bed_one_property`).push({
            //             //     url3: this.state.url3,
            //             // })
            //             this.setState({
            //                 // url3,
            //                 progress3: null,
            //                 image3: null,
            //                 imageObj3: null,
            //                 open: true
            //             })
            //         })
            //     })
        } else if (imageObj4 !== null) {

            // const uploadTask = storage.ref(`Bed_One/images/${imageObj4.name}`).put(imageObj4);
            // uploadTask.on('state_changed',
            //     (snapshot) => {
            //         // progrss function....
            //         const progress4 = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            //         this.setState({ progress4: progress4 })
            //     },
            //     (error) => {
            //         console.log(error);
            //         this.setState({ error_message: error.message })
            //     },
            //     () => {
            //         // complete function...
            //         storage.ref(`Bed_One/images`).child(imageObj4.name).getDownloadURL().then(url4 => {
            //             console.log(url4);
            //             this.setState({
            //                 url4,
            //                 progress4: null,
            //                 image4: null,
            //                 imageObj4: null
            //             })
            //         }).then(() => {

            //             // dbConfig.database().ref("realState/Add_Property").child(`Bed_one_property`).push({
            //             //     url4: this.state.url4,
            //             // });
            //             this.setState({
            //                 // url4,
            //                 progress4: null,
            //                 image4: null,
            //                 imageObj4: null,
            //                 open: true
            //             })
            //         })
            //     })
        }

    }

    updateValue = (ev, target) => {
        let obj = {};
        obj[target] = ev.target.value;
        this.setState(obj);
    };

    render() {
        console.log(this.state.url, this.state.url1, this.state.url2, this.state.url3, this.state.url4)
        const { open } = this.state
        return (
            <div
                style={{
                    paddingTop: 55
                }}
            >
                <Header as='h1' style={{ paddingTop: 60, paddingLeft: 10 }}>Add Details For Three Bed</Header>
                <Divider inverted />
                <Form size={"large"} key={"large"} >
                    <Form.Group>
                        <Form.Field label='Name' control='input' placeholder='Name'
                            onChange={event => { this.updateValue(event, "name"); }}
                            value={this.state.name}
                        />
                        <Form.Field label='Price' control='input' placeholder='Price'
                            onChange={event => { this.updateValue(event, "price"); }}
                            value={this.state.price}
                        />
                        <Form.Field label='Address' control='input' placeholder='Address'
                            onChange={event => { this.updateValue(event, "address"); }}
                            value={this.state.address}
                        />
                    </Form.Group>
                    <Divider hidden />
                </Form>
                <br />
                <p>Upload Property Image</p>
                <input type="file" multiple onChange={this.handleChangeFile} id="uploadfile"></input>
                {/* <button onClick={this.handleUpload}>upload</button> */}

                {
                    this.state.image !== null ?
                        <Button type='submit' size="medium" onClick={this.handleUpload}>upload</Button>
                        : null
                }
                <br />
                <br />
                <br />
                {
                    this.state.imageObj !== null ?
                        <progress value={this.state.progress} max="100" style={{ paddingRight: 5 }} />
                        : null
                }
                {
                    this.state.imageObj1 !== null ?
                        <progress value={this.state.progress1} max="100" style={{ paddingRight: 5 }} />
                        : null
                }
                {
                    this.state.imageObj2 !== null ?
                        <progress value={this.state.progress2} max="100" style={{ paddingRight: 5 }} />
                        : null
                }
                {/* {
                    this.state.imageObj3 !== null ?
                        <progress value={this.state.progress3} max="100" style={{ paddingRight: 5 }} />
                        : null
                }
                {
                    this.state.imageObj4 !== null ?
                        <progress value={this.state.progress4} max="100" style={{ paddingRight: 5 }} />
                        : null
                } */}


                <div>

                    <Divider hidden />
                    <Image.Group size='small'>
                        <Image src={this.state.image === null ? src : this.state.image} />
                        <Image src={this.state.image1 === null ? src : this.state.image1} />
                        <Image src={this.state.image2 === null ? src : this.state.image2} />
                        {/* <Image src={this.state.image3 === null ? src : this.state.image3} />
                        <Image src={this.state.image4 === null ? src : this.state.image4} /> */}
                    </Image.Group>
                    <Divider hidden />

                </div>
                <Grid columns={2}>
                    <Grid.Column>
                        {/* <Button
                            content='Open Portal'
                            disabled={open}
                            positive
                            onClick={this.handleOpen}
                        /> */}

                        <Portal onClose={this.handleClose} open={open}>
                            <Segment
                                style={{
                                    left: '40%',
                                    position: 'fixed',
                                    top: '50%',
                                    zIndex: 1000,
                                }}
                            >
                                {/* <Header>This is a controlled portal</Header> */}
                                <p>successfully uploaded!</p>
                                {/* <p>To close, simply click the close button or click away</p> */}

                                <Button
                                    content='cancel'
                                    positive

                                    onClick={this.handleClose}
                                />
                            </Segment>
                        </Portal>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default AddThreeBedRoom