
const initialAccountState = {
    balance:0,
    leverage:0,
    holdingsValue:0,
    cash:0
}

//Create Account Reducer
export default function accountReducer(state=initialAccountState,action){
    switch (action.type) {
    
    case 'account/deposit': return {...state,balance:state.balance+action.payload}
    case 'account/withdrawl': return {...state,balance:state.balance-action.payload}
    case 'account/takeLeverage': return {...state,balance:state.balance+action.payload, leverage:state.leverage+action.payload}
    case 'account/repayLeverage': return {...state, balance:state.balance-state.leverage, leverage:0}
    case 'account/investments': return {...state,balance:state.balance-action.payload,holdingsValue:state.holdingsValue+action.payload}
    default:
            return state;
    }
}

//Action creator
export function deposit(amount){
    return ({type:'account/deposit',payload:amount})
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