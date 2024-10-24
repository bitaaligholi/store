import React from 'react'
import { useAppContext } from '../context/AppContext'

const Cart = () => {

  const { cartItems, Increase, Decreament } = useAppContext();

  console.log(cartItems)

  return (
    <div className='grid grid-cols-12 gap-4 pb-6'>
      {cartItems.map((cart) => (
        <div key={cart.id} className='col-span-4 shadow-md border border-gray-300 rounded-lg p-5'>
          <div className='flex items-center justify-between'>
            <div className='flex flex-col gap-3 items-center'>
              <img src={cart.img} alt={cart.title} className='w-36 h-36 rounded-md object-contain' />
              <span className='text-gray-500'>{cart.title}</span>
            </div>
            <div className='flex items-center gap-4'>
              <button className='flex items-center justify-center w-10 h-10 font-bold rounded-lg bg-violet-500 text-white text-2xl' onClick={() => Decreament(cart.id)}>-</button>
              <span className='text-lg '>{cart.quantity}</span>
              <button className='flex items-center justify-center w-10 h-10 font-bold rounded-lg bg-violet-500 text-white text-2xl' onClick={() => Increase(cart.id)}>+</button>
            </div>
            <div>${cart.quantity * cart.newPrice}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart