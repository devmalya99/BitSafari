import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deposit, takeLeverage, withdrawl } from './accountSlice'

const DepositCash = () => {
    const [depositMoney,setDeposit] = useState()
    const [withdrawMoney,setWithDraw] = useState()
    const [leverage,setLeverage] = useState()
    const [currency,setCurrency]= useState('USD')

    const {
    balance,
    isLoading,
    holdingsValue,
    } = useSelector((store)=>store.account)
    
    const dispatch = useDispatch()

    const handleWithdraw =()=>{
        if(balance>withdrawMoney){
            dispatch(withdrawl(Number(withdrawMoney)))
            setWithDraw(0)
        }else{
            alert('Balance is not sufficient for withdrawl')
        }
        
        
    }

    const handleDeposit =()=>{
      if(!depositMoney)return;
       
        dispatch(deposit(Number(depositMoney),currency))
        setDeposit("")
        setCurrency('')
    }

    const handleLeverage =()=>{
        if(holdingsValue>20*leverage)
            {
                dispatch(takeLeverage(Number(leverage)))
            }else{
                alert('You dont have sufficient holdings')
            }
    }

  return (
    <div className=" mt-8 flex justify-center items-center ">
      <div className=" rounded-lg p-8 max-w-md">
        <h2 className="text-xl font-semibold mb-4">Your account operations</h2>

        <div className="mb-4">
          <label htmlFor="deposit" className="block text-gray-700 font-semibold mb-2">
            Deposit
          </label>
          <div className="flex flex-col">
            <input
              id="deposit"
              type="number"
              value={depositMoney}
              className="w-full px-4 py-2 mb-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter amount"
              onChange={(e)=>setDeposit(e.target.value)}
            />
            <select className="px-4 py-2 rounded-r-md mb-4 border border-gray-300 "
            value={currency}
            onChange={(e)=>setCurrency(e.target.value)}
            >
              <option value='USD'>USD</option>
              <option  value='INR'>INR</option>
              <option value='EUR'>EURO</option>
            </select>
            <button 
            className=" px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={()=>handleDeposit()}
            disabled={isLoading}
            >
              {
                isLoading ? 
                <p>conerting...</p>
                :
                <p>Deposit</p>
              }
              
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="withdraw" className="block text-gray-700 font-semibold mb-2">
            Withdraw
          </label>
          <div className="flex">
            <input
              id="withdraw"
              type="number"
              value={withdrawMoney}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter amount"
              onChange={(e)=>setWithDraw(e.target.value)}
              
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={()=>handleWithdraw()} 
            
            >
              WITHDRAW
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="loanAmount" className="block text-gray-700 font-semibold mb-2">
            Request leverage
          </label>
          <div className="flex flex-col">
            <input
              id="loanAmount"
              type="number"
              className="px-4 py-2 rounded-l-md mb-2 border border-gray-300 focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Leverage amount upto 20x"
              onChange={(e)=>setLeverage(e.target.value)} 
            />
            <button className=" px-4 py-2 mb-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            onClick={()=>handleLeverage()}
            >
              REQUEST LEVERAGE
            </button>
          </div>
        </div>

        <div className="flex justify-between items-center flex-col">
          <span className="text-gray-700 mb-4 font-semibold">Repay Leverage</span>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            CLEAR LEVERAGE
          </button>
        </div>
      </div>
    </div>
  )
}

export default DepositCash