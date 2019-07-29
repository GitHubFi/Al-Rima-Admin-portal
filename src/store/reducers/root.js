/* eslint-disable no-duplicate-case */
// import {
//     FETCH_WHISKIES,
//     FETCH_WHISKIES_FAILURE,
//     FETCH_WHISKIES_SUCCESS
// } from '../action';
// const initialState = {
//     whiskies: [], // for this example we'll make an app that fetches and lists whiskies
//     isLoading: false,
//     error: false
// };

// export default function rootReducer(state = initialState, action) {
//     switch (action.type) {

//         case FETCH_WHISKIES:
//         return{
//             ...state,
//             isLoading:true,
//             error:null
//         }
//         case FETCH_WHISKIES_SUCCESS:
//         return{
//             whiskies:[...action.payload],
//             isLoading:false,
//             error:null
//         }
//         case FETCH_WHISKIES_FAILURE:
//         return{
//             whiskies:[],
//             isLoading:false,
//             error:action.payload
//         }
//         default:
//             return state;
//     }
// }

////////////////////////////////////// redux observable ///////////////////////////////////////////////

//////////////////////////////////// redux thunk ///////////////////////////////////////
import ActionTypes from '../constant';

const initialState = {
    isProgress: false,
    isProgresssign: false,
    isError: false,
    textError: '',
    serviceList: null,
    userPaymentList: null,
    registerUserList: null,
    allUserMesaage: null,
    utilityPaymentList: null,
    paymentDetail: null,
    notification: null,
    USEROBJECT: null,
    Bill: null,
    paymentObject:null


}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_CUSTOMER_PROGRESS:
            return {
                ...state, isProgress: true
            }
        case ActionTypes.CREATE_CUSTOMER_SUCCESS:
            return {
                ...state,
            }
        case ActionTypes.GET_USER_PROGRESS:
            return {
                ...state, isProgress: true,
            }
        case ActionTypes.GET_USER_SUCCESS:
            return {
                ...state, isProgress: false,
                serviceList: action.payload
            }

        case ActionTypes.GET_USER_SINGUP_PROGRESS:
            return {

                ...state, isProgresssign: true,
            }

        case ActionTypes.GET_USER_SINGUP_SUCCESS:
            return {
                ...state, isProgresssign: true,
                registerUserList: action.payload
            }
        case ActionTypes.GET_USER_PAYMENT_PROGRESS:
            return {
                ...state, isProgress: true,
            }

        case ActionTypes.GET_USER_PAYMENT_SUCCESS:
            return {
                ...state, isProgresssign: true,
                userPaymentList: action.payload
            }

        case ActionTypes.GET_USER_MESAAGE_SUCCESS:
            return {
                ...state, isProgresssign: true,
                allUserMesaage: action.payload
            }

        case ActionTypes.GET_USER_MESSAGE_PROGRESS:
            return {
                ...state, isProgress: true,
            }

        case ActionTypes.GET_USER_PAYMENT_PROGRESSs:
            return {
                ...state, isProgress: true,
            }


        case ActionTypes.GET_USER_PAYMENT_SUCCESSs:
            return {
                ...state, isProgresssign: true,
                paymentDetail: action.payload
            }


        case ActionTypes.NOTIFICATION_PROGRESS:
            return {
                ...state, isProgress: true,
            }

        case ActionTypes.GET_USER_OBJECT:
            return {

                ...state, isProgresssign: true,
                USEROBJECT: action.payload
            }


        case ActionTypes.GET_UTILITY_PAYMENT_PROGRESS:
            return {
                ...state, isProgress: true,
            }


        case ActionTypes.GET_UTILITY_PAYMENT_SUCCESS:
            return {
                ...state, isProgresssign: true,
                utilityPaymentList: action.payload
            }

        case ActionTypes.GET_Bill_SUCCESS:
            return { ...state, Bill: action.payload, isProgress: false }

        case ActionTypes.GET_Bill_PROGRESS:
            return { ...state, isProgress: true }


            case ActionTypes.GET_USER_PAYMENT_OBJECT:
            return { ...state, 
                paymentObject: action.payload}

           


        default:
            return state;
    }
}



///*****GET PAYMENT USER DATA */