import React from 'react'
import CustomerForm from './customer/CustomerForm'
import AccountSummary from './account/AccountSummary'
import DepositCash from './account/DepositCash'
import { useSelector } from 'react-redux'
import WatchList from '../Dashboard/WatchList'
const index = () => {
  const customer = useSelector((store)=>store.customer.fullName)

  return (
    <>
    {
      customer !=='' ? 
      <div className='flex flex-col'>
        <AccountSummary/>
        <DepositCash/>
        <WatchList/>
        
      </div>
      :
      <CustomerForm/>
    }
  
    
    </>
  )
}

export default index