import React from 'react'
import Product from '../../data/data';
import Input from './Input';
import { useAppContext } from '../../context/AppContext';

const allCompany = [...new Set(Product.map(p => p.company))]


const Company = () => {

  const {  setSelectedCompany } = useAppContext()
  const handleChange = (e) => {
    setSelectedCompany(e.target.value)
  }

  return (
    <div className='flex flex-col gap-3'>
      <h2 className='text-2xl text-slate-800 font-bold'>Company</h2>
      <div className='flex items-center gap-1'>
        <input id="allcom" type="radio" value="" onChange={handleChange} name="com" className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-violet-700 rounded-full accent-violet-600" />
        <label htmlFor='allcom' className='cursor-pointer'>All</label>
      </div>
      {allCompany?.map((company, index) => (
        <div key={index}>
          <Input
            name="com"
            handleChange={handleChange}
            value={company}
            title={company}
          />
        </div>
      ))}
    </div>
  )
}

export default Company