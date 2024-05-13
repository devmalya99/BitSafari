import React from 'react'
import CustomerForm from './customer/CustomerForm'
import AccountSummary from './account/AccountSummary'
import DepositCash from './account/DepositCash'
import { useSelector } from 'react-redux'
import WatchList from '../Dashboard/WatchList'
import myStore from '../../Redux/store'
import Login from '../../components/GetIn/Login'
import BottomNavigation from '../../components/reusables/BottomNavigation'
const index = () => {
  const customerEmail = useSelector((store)=>store.customer.user.email)
   console.log(myStore.getState())
  return (
    <>
    {
      customerEmail ? 
      <div className='flex flex-col'>
        <AccountSummary/>
        <DepositCash/>
        <WatchList/>
        <BottomNavigation/>
      </div>
      :
      <Login/>
    }
  
    
    </>
  )
}

export default index