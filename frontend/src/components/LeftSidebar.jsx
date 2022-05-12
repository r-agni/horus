import React from 'react'

const LeftSidebar = () => {
    let healthDetails = {Weight:"60kg", Height:"186cm", Blood:"O+",Disease:"4",Age:"45"}

    
  return (
    <div className='w-full h-full'>
        <div className='m-10 flex flex-1 align-center content-center w-full'>
            <img className='text-left rounded-lg w-16 h-16 object-cover' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQsu34yqIKdjK5cAWEcuUq3ryD30iiqd2ArQ&usqp=CAU'/>
            <p className='ml-10 self-center'>Jhon Doe</p>
        </div>

        <div className='mt-10'>
            <div className='flex w-full m-10' >
            <p>Weight:</p>  
            <p className='flex-1 text-right'>{healthDetails.Weight}</p>
            </div>

            <div className='flex w-full m-10'>
            <p>Height:</p>   
            <p className='flex-1 text-right'>{healthDetails.Height}</p>
            </div>

            <div className='flex w-full m-10'>
            <p>Blood:</p>  
            <p className='flex-1 text-right'>{healthDetails.Blood}</p>
            </div>

            <div className='flex w-full m-10'>
            <p>Disease:</p>  
            <p className='flex-1 text-right'>{healthDetails.Disease}</p>
            </div>
           
            <div className='flex w-full m-10'>
            <p>Age:</p>  
            <p className='flex-1 text-right'>{healthDetails.Age}</p>
            </div>

        </div>
    </div>
  )
}

export default LeftSidebar