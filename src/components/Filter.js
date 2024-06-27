import React from 'react'

const Filter = (props) => {
    let buttonData = props.data;

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {
            buttonData.map((d) => {
               return <button 
                className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300`}
               key={d.id}>{d.title}</button>
            })
        }
    </div>
  )
}

export default Filter