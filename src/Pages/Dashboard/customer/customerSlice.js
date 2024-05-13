
const initialCustomerState ={
    user:{}
  }

  export default function customerReducer(state=initialCustomerState,action){
    switch (action.type){
        case 'customer/createCustomer' :{
            return {...state,
                user:action.payload

            }
        }
      
        default:
            {
                return state
            }
    }
}

//Action creator for Customer
export function createCustomer(user){
    return {
        type:'customer/createCustomer', 
        payload:user
    }
}


