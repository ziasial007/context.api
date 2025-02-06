import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Context/ContextProvider'
const Compo3 = () => {
    const { count , handleDecrement , handleIncrement} = useContext(Context)
  
    return (
        <>
        <div className="flex justify-center items-center flex-col border w-[500px] m-auto h-[100vh]">
            <div className="m-2 text-[25px] text-red-700 bg-amber-300 px-8 py-2 rounded-xl">{count} </div>
            <p>Maximum increse 10</p>
            <button type="button" onClick={handleIncrement} className='bg-green-400 m-1 px-10 py-4 rounded-sm'>+ click</button>
            <p>Maximum increse 0</p>
            <button type="button" onClick={handleDecrement}className='bg-red-400 m-1 px-10 py-4 rounded-sm'> - click</button>
            </div>
        </>
    )
}

export default Compo3