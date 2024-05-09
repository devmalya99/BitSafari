import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createCustomer } from './customerSlice'

const CustomerForm = () => {
    const[fullName,setFullName] = useState('')
    const[nationId,setNationalId] = useState('')
  
    const dispatch=useDispatch()
  
    const handleSubmit=(e)=>{
      e.preventDefault()
     dispatch(createCustomer(fullName,nationId))
    }
    return (
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Create new customer</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md">
          <input
            type="text"
            placeholder="Customer full name"
            onChange={(e)=>setFullName(e.target.value)}
            className="mb-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="National ID"
            onChange={(e)=>setNationalId(e.target.value)}
            className="mb-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            CREATE NEW CUSTOMER
          </button>
        </form>
      </div>
    );
}

export default CustomerForm