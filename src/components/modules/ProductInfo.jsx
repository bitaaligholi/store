import React from 'react'
import { useAppContext } from '../../context/AppContext'
import Card from './Card'

const ProductInfo = () => {
  
  const { result } = useAppContext()

  return (
    <div>
      <Card data={result}/>
    </div>
  )
}

export default ProductInfo