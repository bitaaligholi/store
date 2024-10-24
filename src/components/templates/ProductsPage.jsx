import React, { useEffect } from 'react'
import SideBar from '../modules/SideBar'
import ProductInfo from '../modules/ProductInfo'

const ProductsPage = () => {

  useEffect(() => {
    return () => {
      console.log('cleanup')
    }
  },[])
  return (
    <div className='grid grid-cols-12 gap-4'>
      <div className='col-span-2'>
        <SideBar />
      </div>
      <div className='col-span-10'>
        <ProductInfo />
      </div>
    </div>
  )
}

export default ProductsPage