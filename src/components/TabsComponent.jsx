import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const list = [
  {
    "title": 'Grid View',
    "id": 'A1'
  }
  ,
  {
    "title": 'List View',
    "id": 'A2'
  }

]
const TabsComponent = ({setShowGrid}) => {
  const [activeID,setActiveId] = useState('A1')

  const handleClick =(id)=>{
    setActiveId(id)
    setShowGrid(id==='A1')
  }
  
  return (
    <div className="border-2 rounded-xl w-full lg:w-[700px] py-2 mt-8 mb-8">
    <div role="tablist" className="tabs tabs-boxed">
      {
        list.map((each)=>{
          return (
            <Link to key={each.id} role="tab" 
            className={`tab text-xl ${each.id===activeID ? 'tab-active':''}` }

            onClick={()=>handleClick(each.id)}
            >
              {each.title}
            
            </Link>
          )
        })
      }

</div>
    </div>
  )
}

export default TabsComponent