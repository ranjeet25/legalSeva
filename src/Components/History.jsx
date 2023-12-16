import React from 'react'

function History(props) {
  return (
    <div className='bg-gray-100 h-[100vh]  w-[20vw]'>
      <h4 className='font-bold p-2 '> History </h4>  
      <div>

      { props.mp.map((item) => (<p className=' bg-gray-300 p-2 mt-2 '>{item.question}</p>,
        <p className='text-sm bg-gray-400 p-2  '>{item.answer}</p>))}
      </div>
    
    </div>
  )
}

export default History