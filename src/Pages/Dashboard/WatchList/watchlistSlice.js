

const initalWatchList={
    list:[],
}

//Watch List Reducer
export default function watchlistReducer (state=initalWatchList,action) {

    switch (action.type) {
        case 'watchlist/add': return {...state,list:[...state.list,action.payload]}
        case 'watchlist/remove': return {...state,list:state.list.filter(item=>item.id !==action.payload.id)}
    
        default:
            return state;
    }
    
    
}

//watchlist action creator
export const addToWatchlist =(obj)=>{
    return ({type:'watchlist/add', payload: obj})
}
export const removeFromWatchList = (id)=>{
    return ({type:'watchlist/remove' , payload: {id}})
}