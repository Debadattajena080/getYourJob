import React from 'react';
import FilterIndex from './FilterSection/FilterIndex';
import JobIndex from './JobSection/JobIndex'

const Index = () => {
  return (
    <div className="flex mt-10">
    <div className="mx-20 flex"> 
      <div className="w-2/6 mr-10"> 
        <div>
          <FilterIndex />
        </div>
      </div>
      <div className="w-70 ">
        <div className="">
          <JobIndex />
        </div>
      </div>
    </div>
  </div>
  
  
  )
}

export default Index
