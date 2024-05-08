import { ToggleButton } from '@mui/material'
import React from 'react'

const SortToastify = ({order,setShow}) => {
 
   
 
    return (
    <div className="toast toast-top toast-end">
  <div className="alert alert-info">
    {
        order==='asc' ? 
        <span>Sorted in Descending Order</span> 
        :<p>Sorted in Ascending Order</p>
    }
    {/* {setShow ? <p>YEs</p>: <p>No</p>} */}
    <button  className='bg-green-400 px-4 cursor-pointer' onClick={()=>setShow(false)}>X</button>
  </div>
  
</div>
  )
}

export default SortToastify