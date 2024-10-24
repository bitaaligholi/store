import React from 'react'
import Category from "./Category";
import Companty from "./Company";
import Colors from './Colors';


const SideBar = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Category />
      <Companty />
      <Colors />
    </div>
  )
}

export default SideBar