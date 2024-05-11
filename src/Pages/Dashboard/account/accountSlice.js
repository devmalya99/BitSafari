
const initialAccountState = {
    balance:0,
    leverage:0,
    holdingsValue:0,
    cash:0,
    isLoading:false
}

//Create Account Reducer
export default function accountReducer(state=initialAccountState,action){
    switch (action.type) {
    
    case 'account/deposit': return {...state,balance:state.balance+action.payload,isLoading:false}
    case 'account/withdrawl': return {...state,balance:state.balance-action.payload}
    case 'account/takeLeverage': return {...state,balance:state.balance+action.payload, leverage:state.leverage+action.payload}
    case 'account/repayLeverage': return {...state, balance:state.balance-state.leverage, leverage:0}
    case 'account/investments': return {...state,balance:state.balance-action.payload,holdingsValue:state.holdingsValue+action.payload}
    case 'account/convertingCurrency' : return {...state,isLoading:true}
    default:
            return state;
    }
}

//Action creator
export function deposit(amount,currency){
    if(currency==='USD') return (
        {type:'account/deposit',payload:amount}
    )

    //else if any other currency
    return async function(dispatch,getState){

        dispatch({type:'account/convertingCurrency'})
        //api call
       
       const res = await fetch( `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`)
       const data = await res.json()
       
       const converted = await data.rates.USD
       

       

        //return action
        dispatch ({type:'account/deposit' , payload:(Number(converted))})
        
    }
}

export function withdrawl(amount){
    return ({type:'account/withdrawl',payload:amount})
}

export function takeLeverage(amount){
    return ({type:'account/takeLeverage',payload:amount})
}

export function investments(amount){
    return ({type:'account/investments',payload:amount})
}

export function repayLeverage(amount){
    return ({type:'account/repayLeverage',payload:amount})
}