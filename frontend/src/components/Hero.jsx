import React, {useState, useEffect} from 'react'
import Clock from 'react-clock'

const Hero = () => {
  const[value, setValue] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);
    console.log(value)

    return () => {
      clearInterval(interval);
    };
  }, []);

  const medications = [{
    name:'pill name',
    quantity:'3',
    pill:'https://api.time.com/wp-content/uploads/2018/08/placebo-pill-red-zachary-zavislak.jpg',
    description:'take this pill with a meal',
    time:'12pm'
  },
  {
    name:'pill 2 name',
    quantity:'3',
    pill:'https://img.medscapestatic.com/pi/features/drugdirectory/octupdate/PGO04840.jpg',
    description:'take this pill with a meal',
    time:'12pm'
  },
  {
    name:'pill 3 name',
    quantity:'3',
    pill:'https://i.guim.co.uk/img/media/b2188a778532d62d49f79cd5ff687ebe4b9b63a1/100_191_2171_1303/master/2171.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=b55c95c7767f79456e1864c670680941',
    description:'take this pill with a meal',
    time:'12pm'
  },
  {
    name:'pill 4 name',
    quantity:'3',
    pill:'https://images.newscientist.com/wp-content/uploads/2019/03/19160004/a70dw0-2.jpg',
    description:'take this pill with a meal',
    time:'12pm'
  },
]

  return (
    <div className='p-10 w-full h-full w-full flex flex-col center align-center justify-center'>
       <h2 className='text-2xl text-bold italic'>Hi, Jhon</h2>
       <h2 className='text-lg mt-2'>Welcome back, what would you like to do today?</h2>
        
        {/* REACH OUT SECTION */}
       <div className="place-content-center justify-center center align-center flex mt-10  center justify-center align-center w-full">
       <div className='flex-col place-content-center flex-col-reverse justify-center center align-center w-11/12 min-h-large p-5 flex md:flex-row h-full bg-blue-300 rounded-xl object-cover'>
          <div className="flex flex-col">
          <h2 className='mt-12 w-full text-white text-bold md:w-2/6 text-2xl'>Reach Out!</h2>
         <h2 className='mt-2 text-white text-bold'>Let use know what we can do to make your experience better</h2>
          <p className='w-2/6 min-w-small py-2 text-center text-blue-400 mt-5 bg-white rounded-full'>Tap To Chat</p>
          </div>
          <div className="flex h-44 lg:w-4/12 max-w-xs w-full align-center center place-content-center justify-center">
          <img className='w-64 min-w-small object-cover' src='https://njawlaboratories.com/wp-content/uploads/2021/12/cropped-Njaw-Hero-2-1-1.png'/>
          </div>
           </div>
       </div>

          {/* Your medication */}
          <div className="w-full h-64 mt-10 justify-center lg:flex-row flex-col flex">

          <div className="h-full lg:mr-10 rounded-lg w-full justify-center align-center pl-10 pt-24 lg:w-7/12 place-content-center flex flex-col overflow-y-scroll lg:w-3/g bg-blue-300">
          
          {
            medications.map((pill) => (
             <div className="flex rounded-lg mt-5 align-self-center flex-row align-center place-content-center px-5 center justify-between bg-blue-100 w-11/12 h-auto">
          
            <img className='w-16 h-16 p-2 rounded-full'  src={pill.pill} alt='pill'/>

            <div className="flex flex-col justify-center">
            <p className='text-lg font-bold'>{pill.name}</p>
            </div>

            <div className="flex flex-col center text-center justify-center">
            <p className= 'text-xs '>Quantity</p>
            <p className= 'text-lg text-bold'>{pill.quantity}</p>
            </div>

            <p className='text-2xl place-self-center font-bold'>{pill.time}</p>
          </div>
            ))
          }         
          
          {/* CLOCK */}
          </div>
          <div className="h-full z-50 mt-10 lg:mt-0 flex center justify-center text-center flex-col bg-stone-300 rounded-lg w-full lg:w-3/12">
            <h1 className='text-sm'>Current Time</h1>
          <p className='text-xl font-bold'>{value.toTimeString().slice(0,8)}</p>
          </div>
          </div>
    </div>
  )
}

export default Hero