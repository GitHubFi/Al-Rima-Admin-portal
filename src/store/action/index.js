/* eslint-disable no-undef */
// export const FETCH_WHISKIES = 'FETCH_WHISKYS';
// export const FETCH_WHISKIES_SUCCESS = 'FETCH_WHISKYS_SUCCESS';
// export const FETCH_WHISKIES_FAILURE = 'FETCH_WHISKYS_FAILURE';

// export const fetchWhiskies = () => ({
//     type: FETCH_WHISKIES,
// });

// export const fetchWhiskiesSuccess = (whiskies) => ({
//     type: FETCH_WHISKIES_SUCCESS,
//     payload: whiskies
// });

// export const fetchWhiskiesFailure = (message) => ({
//     type: FETCH_WHISKIES_FAILURE,
//     payload: message
// });


//////////////////////////////////////////// redux observable ////////////////////////////////////////////////


/////////////////////////////////////////// redux thunk ///////////////////////////////////////////////////////

///////////////////////////////////////// Start ///////////////////////////////////////////////////



import ActionTypes from '../constant';
import dbConfig from '../../config';

///////////////////////////////////////// Get User Contact Messages ///////////////////////////////////////////////////

export function createContactsAction() {
    return dispatch => {

        dispatch(getUserMessageProgress())
        dbConfig.database().ref('realState/contactMessage').on('value', snap => {
            let userList = snap.val(),
                userListKeys = Object.keys(userList);
            console.log(userList);

            // let array = [];
            let array = [];

            userListKeys.map(i => {
                if (userList[i].contactMessageData) {
                    let obj = {
                        contactNo: userList[i].contactMessageData.contactNo,
                        description: userList[i].contactMessageData.description,
                        email: userList[i].contactMessageData.email,
                        name: userList[i].contactMessageData.name,
                        subject: userList[i].contactMessageData.subject,
                        user: userList[i].contactMessageData.user,
                        time: userList[i].time,


                    }

                    array.push(obj);
                    console.log(array);
                }
            })
            dispatch(getUserMessageSuccess(array))
        })

    }
}






function getUserMessageSuccess(data) {
    return {
        type: ActionTypes.GET_USER_MESAAGE_SUCCESS,
        payload: data
    }
}

function getUserMessageProgress() {
    return {
        type: ActionTypes.GET_USER_MESSAGE_PROGRESS
    }
}


///////////////////////////////////////// Get User  createPaymentAction ///////////////////////////////////////////////////

export function createPaymentAction() {
    return dispatch => {

        dispatch(getUserPaymentProgresss())
        dbConfig.database().ref('realState/userPayment').on('value', snap => {
            let userList = snap.val(),
                userListKeys = Object.keys(userList);
            console.log(userList);

            // let array = [];
            let array = [];
            let ObjDAta=[]

            userListKeys.map(i => {
                if (userList[i].userPaymentData) {
                    let obj = {
                        cardNumber: userList[i].userPaymentData.cardNumber,
                        cvc: userList[i].userPaymentData.cvc,
                        date: userList[i].userPaymentData.date,
                        user: userList[i].userPaymentData.user,
                        rent1: userList[i].userPaymentData.RentforoneBed,
                        name: userList[i].userPaymentData.name
                    }

                    array.push(obj);
                    ObjDAta.push(obj.rent1)
                    

                    console.log(array);
                }

            })
           
            dispatch(getPaymentObject(ObjDAta))
            dispatch(getUserPaymenmtSuccesss(array))
            console.log("PAYTE<ERER", array);
        })

    }
}

function getPaymentObject(data) {
    return {
        type: ActionTypes.GET_USER_PAYMENT_OBJECT,
        payload: data
    }
}
function getUserPaymenmtSuccesss(data) {
    return {
        type: ActionTypes.GET_USER_PAYMENT_SUCCESSs,
        payload: data
    }
}

function getUserPaymentProgresss() {
    return {
        type: ActionTypes.GET_USER_PAYMENT_PROGRESSs
    }
}
////////////////  get UTILITY_PAYMENT ///////////////

export function createUtilityPaymentAction() {
    return dispatch => {

        dispatch(getUtilityPaymentProgresss())
        dbConfig.database().ref('realState/utilityPayment').on('value', snap => {
            let userList = snap.val(),
                userListKeys = Object.keys(userList);
            console.log(userList);

            // let array = [];
            let array = [];

            userListKeys.map(i => {
                if (userList[i].userPaymentData) {
                    let obj = {
                        cardNumber: userList[i].userPaymentData.cardNumber,
                        cvc: userList[i].userPaymentData.cvc,
                        date: userList[i].userPaymentData.date,
                        user: userList[i].userPaymentData.user,
                        rent1: userList[i].userPaymentData.RentforoneBed,
                        name: userList[i].userPaymentData.name,
                        payment: userList[i].userPaymentData.payment,
                        paid: userList[i].userPaymentData.paid,
                        id: userList[i].userPaymentData.id
                    }

                    array.push(obj);
                    console.log("IMAZZZ", array);
                }
            })
            dispatch(getUtilityPaymenmtSuccesss(array))
            console.log("PAYTE<IMAZ", array);
        })

    }
}


function getUtilityPaymenmtSuccesss(data) {
    return {
        type: ActionTypes.GET_UTILITY_PAYMENT_SUCCESS,
        payload: data
    }
}

function getUtilityPaymentProgresss() {
    return {
        type: ActionTypes.GET_UTILITY_PAYMENT_PROGRESS
    }
}

///////////////////////////////////// Create Customer ////////////////////////////////////////////

export function createCustomerAction(obj) {
    return dispatch => {
        dispatch(createCustomerProgress())
        dbConfig.database().ref(`realState/RimaUsers/${obj.uid}/userDetail`).set(obj);

    }
}


function createCustomerProgress() {
    return {
        type: ActionTypes.CREATE_CUSTOMER_PROGRESS
    }
}
function createCustomerSuccess(data) {
    return {
        type: ActionTypes.CREATE_CUSTOMER_SUCCESS,
        payload: data
    }
}
function createCustomerError(error) {
    return {
        type: ActionTypes.CREATE_CUSTOMER_FAILED,
        payload: error
    }
}





/////////////////////////////////////////////// Get All User with service ///////////////////////////////////////////
export function getUserList() {
    return dispatch => {
        console.log('get')
        dispatch(getUserProgress())
        dbConfig.database().ref('realState/userServices').on('value', snapshot => {
            // console.log(snapshot.val())
            let userList = snapshot.val(),
                userListKeys = Object.keys(userList);

            let arrList = [];
            userListKeys.map(i => {
                if (userList[i].serviceData) {
                    let obj = {
                        address: userList[i].serviceData.address,
                        chosenDate: userList[i].serviceData.chosenDate,
                        description: userList[i].serviceData.description,
                        houseNo: userList[i].serviceData.houseNo,
                        pNumber: userList[i].serviceData.pNumber,
                        serviceRequired: userList[i].serviceData.serviceRequired,
                        timeSlot: userList[i].serviceData.timeSlot,
                        user: userList[i].serviceData.user,
                        // userServices: Object.values(userList[i].userServices)
                    }
                    arrList.push(obj)
                }
            })
            console.log(arrList, 'userList')
            dispatch(getUserSuccess(arrList))
        })
    }
}

function getUserProgress() {
    return {
        type: ActionTypes.GET_USER_PROGRESS
    }
}
function getUserSuccess(data) {
    return {
        type: ActionTypes.GET_USER_SUCCESS,
        payload: data
    }
}




///////////////////////getting user form sign up/////////////////////
export function GetSignUpUser() {
    return dispatch => {
        console.log('get')
        dispatch(getUserProgress1())
        dbConfig.database().ref('realState/RimaUsers').on('value', snapshot => {
            console.log(snapshot.val())
            let userList = snapshot.val(),
                userListKeys = Object.keys(userList);

            let arrList = [];


            userListKeys.map(i => {
                if (userList[i]) {
                    let obj = {
                        uid: userList[i].uid,
                        email: userList[i].email,
                        name: userList[i].name,
                        // userServices: Object.values(userList[i].userServices),
                        //  userPayments: Object.values(userList[i].userPayments),

                    }
                    arrList.push(obj)

                    // dispatch(GetUserObject(Data))
                }

            })
            console.log(arrList, 'userList')
            dispatch(getUserSuccess1(arrList))



        })
    }

}
function getUserProgress1() {
    return {
        type: ActionTypes.GET_USER_SINGUP_PROGRESS
    }
}
function getUserSuccess1(data) {
    return {
        type: ActionTypes.GET_USER_SINGUP_SUCCESS,
        payload: data
    }
}

// function GetUserObject(data) {
//     return {
//         type: ActionTypes.GET_USER_OBJECT,
//         payload: data
//     }
// }

function getUserError(error) {
    return {
        type: ActionTypes.GET_USER_FAILED,
        payload: error
    }
}



/////////////////////////////////////////////// Create Notification Action ///////////////////////////////////////////



export function createNotificationAction(Notification) {
    return dispatch => {
        // dispatch(NotificationRequest());

        let addId = dbConfig.database().ref(`realState/Notification`).push().key;

        let updates = {};
        let addUser = {

            Notification

        }
        updates[
            `realState/Notification/${addId}`
        ] = addUser;
        dbConfig
            .database()
            .ref()
            .update(updates);



        dispatch(NotificationSuccess(updates))
    }
}


/////////////////////////////////////////////// Get Notification Action ///////////////////////////////////////////

export function GetAllNotification() {
    return dispatch => {
        dispatch(NotificationRequest());

        dbConfig.database().ref('realState/Notification').on('value', snapshot => {
            // console.log(snapshot.val())
            let userList = snapshot.val(),
                userListKeys = Object.keys(userList);

            let arrList = [];
            userListKeys.map(i => {
                if (userList[i]) {
                    let obj = {
                        Notification1: userList[i].Notification.Notification1,
                        Notification2: userList[i].Notification.Notification2,
                        Notification3: userList[i].Notification.Notification3,
                    }
                    arrList.push(obj)
                }
            })

            dispatch(NotificationSuccess(arrList))
        })
    }
}

function NotificationRequest() {
    return {
        type: ActionTypes.NOTIFICATION_PROGRESS
    }
}
function NotificationSuccess(data) {
    return {
        type: ActionTypes.NOTIFICATION_SUCCEED,
        payload: data
    }
}



/////////get OBJ  of user/////
/////////////////////////////////////////////// Create Notification Action ///////////////////////////////////////////



export function createBillAction(bill) {
    return dispatch => {
        // dispatch(NotificationRequest());

        let addId = dbConfig.database().ref(`realState/Bill`).push().key;

        let updates = {};
        let addUser = {

            bill,
            addId

        }
        updates[
            `realState/Bill/${addId}`
        ] = addUser;
        dbConfig
            .database()
            .ref()
            .update(updates);



        // dispatch(NotificationSuccess(updates))
    }
}



//////////////////////////////////Getting Bill///////////////////////////////

export function BillAction() {
    return dispatch => {
        dispatch(getUserBillProgress())
        dbConfig.database().ref('realState/Bill').on('value', snapshot => {
            // console.log(snapshot.val())
            let userList = snapshot.val(),
                userListKeys = Object.keys(userList);


            let arrList = [];
            userListKeys.map(i => {
                if (userList[i]) {
                    let obj = {
                        Notification1: userList[i].bill.Notification1,
                        Notification2: userList[i].bill.Notification2,
                        Notification3: userList[i].bill.Notification3,
                        userId: userList[i].bill.userId,
                        name: userList[i].bill.name,
                        email: userList[i].bill.email,
                        type: userList[i].bill.type,
                        paid: userList[i].bill.paid,
                        id: userList[i].addId


                        // userServices: Object.values(userList[i].userServices)
                    }
                    arrList.push(obj)
                }
            })
            console.log(arrList, '+*********************************+Bill+*****************************')
            dispatch(getUserBillSuccess(arrList))
        })
    }

}


function getUserBillProgress() {
    return {
        type: ActionTypes.GET_Bill_PROGRESS
    }
}
function getUserBillSuccess(data) {
    return {
        type: ActionTypes.GET_Bill_SUCCESS,
        payload: data
    }
}
