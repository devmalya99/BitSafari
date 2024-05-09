import React from 'react'

const TabsComponent = () => {
  return (
    <div className="border-2 rounded-xl w-full lg:w-[700px] py-2 mt-8 mb-8">
    <div role="tablist" className="tabs tabs-boxed">
<a role="tab" className="tab text-xl">Grid View</a>
<a role="tab" className="tab tab-active text-xl">List View</a>
</div>
    </div>
  )
}

export default TabsComponent