import { combineReducers, createStore } from "redux";
import accountReducer from "../Pages/Dashboard/account/accountSlice";
import customerReducer from "../Pages/Dashboard/customer/customerSlice";
import watchlistReducer from "../Pages/Dashboard/WatchList/watchlistSlice";

const rootReducer = combineReducers(
    {
        account:accountReducer,
        customer:customerReducer,
        watchList:watchlistReducer
    }
)

const myStore = createStore(rootReducer)
export default myStore;