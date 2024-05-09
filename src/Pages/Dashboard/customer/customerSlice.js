
const initialCustomerState ={
    fullName: '',
    nationalId:'',
    createdAt:'',
  }

  export default function customerReducer(state=initialCustomerState,action){
    switch (action.type){
        case 'customer/createCustomer' :{
            return {...state,
                fullName:action.payload.fullName,
                nationalId:action.payload.nationalId,
                createdAt:action.payload.createdAt

            }
        }
        case 'customer/updateName':{
            return {
                ...state,
                fullName:action.payload
            }
        }
        default:
            {
                return state
            }
    }
}

//Action creator for Customer
export function createCustomer(fullName,nationalId){
    return {
        type:'customer/createCustomer', 
        payload:{fullName,nationalId,createdAt:new Date().toISOString()}
    }
}

export function updateName(fullName){
    return {type:'account/updateName',
        payload: fullName
    }
}

