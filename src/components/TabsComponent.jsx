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
const TabsComponent = () => {
  const [activeID,setActiveId] = useState('')
  const handleClick=(id)=>{
     
  }
  return (
    <div className="border-2 rounded-xl w-full lg:w-[700px] py-2 mt-8 mb-8">
    <div role="tablist" className="tabs tabs-boxed">
      {
        list.map((each)=>{
          return (
            <Link to key={each.id} role="tab" 
            className={`tab text-xl ${each.id===activeID ? 'tab-active':''}` }
            onClick={()=>setActiveId(each.id)}
            >{each.title}</Link>
          )
        })
      }

</div>
    </div>
  )
}

export default TabsComponent