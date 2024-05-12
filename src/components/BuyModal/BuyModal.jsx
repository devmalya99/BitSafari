import React from 'react'

const BuyModal = ({price}) => {
  return (
    <dialog id="my_modal_4" className="modal">
    <div className="modal-box w-11/12 max-w-5xl">
     
     
      <div className="md:font-bold bg-blue-500 rounded-xl">
        
        <p className='ml-2 text-md sm:text-lg md:text-xl lg:text-2xl'> Buy Bitcoin x 25 at {price}₹</p>
        
      
      </div>
     
     
     
      <div className="py-4 border-2 rounded-xl mt-2 md:flex ">


        <div className='mb-4'>
          <span>Qty: </span>
          <span className=' ml-4'>
            <input className='bg-green-200 text-black rounded-xl text-bold text-md sm:text-lg 
            md:text-xl sm:py-1 md:py-2 lg:py-3 '
            type='number'
            />
          </span>
          

        </div>

        <div className='mb-2 sm:ml-4'>
        <span>Price: </span>
          <span className='ml-1'>
            <input className='bg-green-200 text-black rounded-xl text-bold text-md sm:text-lg 
            md:text-xl sm:py-1 md:py-2 lg:py-3 '
            type='number'
            value={price}
            />
          </span>
        </div>
        

      </div>
     
     
     
      <div className="modal-action">
        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn bg-blue-600 px-8 text-lg">Buy</button>
          <button className="btn hover:bg-rose-600">Close</button>
        </form>
      </div>
    </div>
  </dialog>
  )
}

export default BuyModal