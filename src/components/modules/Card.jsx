import React, { useState, useEffect } from 'react'
import { Star } from 'lucide-react';
import { useAppContext } from '../../context/AppContext';

const Card = ({ data }) => {
    const { addToCart } = useAppContext();
    const [isOpen, setIsOpen] = useState(false);
    const [list, setList] = useState(data);
    const [dialogData, setDialogData] = useState(null);
      
        const openDialog = (data) => {
          setDialogData(data); 
          setIsOpen(true);     
        };
        const closeDialog = () => {
          setIsOpen(false);    
          setDialogData(null);
        };

    useEffect(() => {
        if (data) {
            setList(data)
        }
    }, [data])

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map(el => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc' ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        let aa, bb;
        if (orderBy === 'newPrice') {
            aa = Number(a[orderBy]);
            bb = Number(b[orderBy]);
        } else {
            aa = a[orderBy];
            bb = b[orderBy];
        }
        if (bb < aa) {
            return -1;
        }
        if (bb > aa) {
            return 1;
        }
        return 0;
    }

    function handleClickSort(list, order) {
        setList(stableSort(list, getComparator(order, 'newPrice')));
    }

    return (
        <div>

            <button className='w-40 h-10 border border-violet-900 bg-violet-500 text-white rounded-lg' onClick={() => handleClickSort(list, 'desc')}>The most expensive</button>
            <button className='w-40 h-10 border border-violet-900 bg-violet-500 text-white rounded-lg' onClick={() => handleClickSort(list, 'asc')}>The cheapest</button>
            {
                list ?.length > 0 ?
                    <div className='grid grid-cols-12 gap-4'>
                        {list ?.map((item) => (
                            <div key={item.id} className='col-span-4'>
                                <div className='shadow-lg border flex flex-col gap-4 border-gray-300 p-3 rounded-lg'>
                                    <div>
                                        <img src={item.img} alt={item.title} className='w-full object-contain h-56' />
                                    </div>
                                    <span className='font-bold text-lg text-slate-800'>{item.title}</span>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-1'>
                                            <Star className='text-yellow-500' width={16} />
                                            <Star className='text-yellow-500' width={16} />
                                            <Star className='text-yellow-500' width={16} />
                                            <Star className='text-yellow-500' width={16} />
                                        </div>
                                        <div>{item.reviews}</div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <del className='text-sm text-gray-500'>{item.prevPrice}</del>
                                        <span className='text-rose-700 font-bold'>{item.newPrice}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                    <button className='w-40 h-10 border border-rose-900 bg-rose-600 text-white rounded-lg' onClick={() => addToCart(item)}>Add To Cart</button>
                                    <button className='w-40 h-10 border border-rose-900 bg-rose-600 text-white rounded-lg' onClick={() => openDialog(item)}>Show Detail</button>
                                    </div> 
                                </div>
                                {isOpen && (
                                    <div className="fixed inset-0 bg-white bg-opacity-5 flex items-center justify-center z-50">
                                        <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full"> 
                                            <h2 className="text-xl font-bold mb-4">{dialogData?.title}</h2>
                                            <img src={dialogData?.img} className='w-full object-contain h-56' />
                                            <p className="mb-4">{dialogData?.description}</p>
                                            <div className='flex items-center justify-between'>
                                            <button className='w-40 h-10 border border-rose-900 bg-rose-600 text-white rounded-lg' onClick={() => addToCart(dialogData)}>Add To Cart</button>
                                            <button className="w-40 h-10 border border-rose-900 bg-rose-600 text-white rounded-lg" onClick={closeDialog}>Close </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    :
                    <div className='flex items-center justify-center'>
                        <span className='text-rose-700 font-bold'>{"The desired item was not found."}</span>
                    </div>
                    }
        </div>
    )
}

export default Card