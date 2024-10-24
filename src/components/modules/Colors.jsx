import React from 'react'
import Product from '../../data/data';
import Input from './Input';
import { useAppContext } from '../../context/AppContext';

const allColors = [...new Set(Product.map(p => p.color))]

const Colors = () => {

  const {setSelectedColor } = useAppContext()
  const handleChange = (e) => {
    setSelectedColor(e.target.value) 
    
  }

  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-2xl text-slate-800 font-bold'>Colors</h2>
      <div className='flex items-center gap-1'>
        <input id="allcol" type="radio" value="" name="col" onChange={handleChange} className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-violet-700 rounded-full accent-violet-600" />
        <label htmlFor='allcol' className='cursor-pointer'>All</label>
      </div>
      {allColors?.map((color, index) => (
        <div key={index}>
          <Input name='col' value={color} handleChange={handleChange} title={color} />
        </div>
      ))}
    </div>
  )
}

export default Colors