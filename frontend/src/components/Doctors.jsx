import React from 'react'

const Doctors = () => {
  const doctors = [
    {
      name:'Dr Arizona Clark',
      specialization:'Ophthalmologist',
      img:'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
      location:'378 Duncare Drive',
    },
    {
      name:'Dr Heine',
      specialization:'Family Doctor',
      img:'https://familydoctor.org/wp-content/uploads/2018/02/41808433_l.jpg',
      location:'1918 Dundas Street',
    },
    {
      name:'Dr Brown',
      specialization:'Pediatrition',
      img:'https://www.aamc.org/sites/default/files/styles/scale_and_crop_1200_x_666/public/Public%20Opinion%20Research%201200x666.jpg?itok=Z9g0DOPe',
      location:'899 Queens Park way',
    },
  ]
  return (
    <div className='w-full h-full'>
       <div className='p-10 w-full h-full flex flex-col center align-center justify-center'>
       <h2 className='text-2xl text-bold italic'>Find a doctor in your area!</h2>

<div className="p-7">
       <div className="flex lg:flex-row flex col space-x-4">
  <div className="mt-10 h-24 bg-pink-200 border-2 border-pink-300  center flex justify-center place-items-center rounded-lg lg:w-2/6 w-full center place-content-center">
    <p className='italic text-md'>Pediatritions</p>
  </div>


  <div className="mt-10 h-24 bg-green-200 border-2 border-green-300   center flex justify-center place-items-center rounded-lg lg:w-2/6 w-full center place-content-center">
    <p className='italic text-md center   text-center align-center'>Family Doctors</p>
  </div>


  <div className="mt-10 h-24 bg-orange-200 border-2 border-orange-300  rounded-lg lg:w-2/6 w-full center flex justify-center place-items-center">
    <p className='italic text-md'>Surgeons</p>
  </div>
       </div>

{/* DOCTORS SECTION */}
       <div className="mt-10 bg-blue-300 min-h-small min-w-small w-full h-full rounded-lg p-5">
       <h2 className='text-xl text-bold underline'>Popular Doctors</h2>
       <h2 className='text-md text-bold'>Scroll to fund one that matches your needs</h2>
         {
           doctors.map((doctor) => (
            <div className="w-full mt-5 center justify-center space-x-4 align-center place-content-center text-center flex lg:flex-row flex-col min-h-small rounded-xl bg-stone-100 p-3">
            <img className='w-12 place-self-center object-cover h-12 center rounded-full' src={doctor.img} alt='doctor'/>
           <p className='text-lg place-self-center center text-bold'>{doctor.name}</p>
           <p className='text-sm place-self-center align-center italic'>{doctor.specialization}</p>
           <p className='text-sm place-self-center'>{doctor.location}</p>
          </div>
           ))
         }
       </div>

{/* DOCTORS SECTION */}
</div>
       </div>
  </div>
  )
}

export default Doctors