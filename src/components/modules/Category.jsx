import React, { useState } from 'react'
import Input from './Input'
import Product from '../../data/data';
import { useAppContext } from '../../context/AppContext';

const allCategory = [...new Set(Product.map(p => p.category))]

const Category = () => {

  const {setSelectedCategory} = useAppContext()
  const handleChange = (e) => {  
    setSelectedCategory(e.target.value)

  }

  return (
    <div className='flex flex-col gap-3'>  
      <h2 className='text-2xl text-slate-800 font-bold'>Category</h2>
      <div className='flex items-center gap-1'>
        <input id="all" type="radio" value="" onChange={handleChange} name="cat" className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-violet-700 rounded-full accent-violet-600" />
        <label htmlFor='all' className='cursor-pointer'>All</label>
      </div>
      {allCategory.map((category, index) => (
        <div key={index}>
          <Input
            name='cat'
            value={category}
            handleChange={handleChange}
            title={category}
          />
        </div>
      ))}
    </div>
  )
}

export default Category