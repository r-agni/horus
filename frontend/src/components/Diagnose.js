import React,{useState} from 'react'
import axios from 'axios'
import { useStateContext } from '../context/userContext'
const server = 'http://71.204.171.183:89'

const Diagnose = () => {
  const [file, setFile] = useState('')
  const [result, setResult] = useState('')
  const {user} = useStateContext()
  const addFile = async () => {
    console.log('found user', user)
    
    const data = new FormData() 
    data.append('image', file) 
    data.append('patient', user.id) 
    axios({ method: "post", url: `${server}/api/v1/result/sendResult`,
     data: data, headers: { "Content-Type": "multipart/form-data" }, }) 
     .then(function (response){ 
       console.log(response); 
       setFile(null)

       if (response.data.category == 0){
         setResult('Point-like corneal ulcers')
       } else if (response.data.category == 1){
        setResult('Point-flaky mixed corneal ulcers')
       } else if(response.data.category == 2){
         setResult('Flaky corneal ulcers')
       }
       console.log('resultsss', result)
      }) 
      .catch(function (response) { console.log(response); });
}
  return (
    <div className='w-full h-full'>
    <div className='p-10 w-full h-full flex flex-col center align-center justify-center'>
    <h2 className='text-2xl text-bold italic'>Diagnose</h2>
    <div className="flex flex-col mt-10 space-y-2" >
    <p >Self Diagnose Here</p>
    <label for='fileUpload' className='w-11/12 p-2 h-32 pt-10 border-dotted border-2 text-center justify-center border-black' >Upload Image</label>
    <input id='fileUpload' className='hidden' onChange={(e) => setFile(e.target.files[0])}  type='file' />
    {file && <p>Image Added: {file.name}</p> }
    <input onClick={addFile}  className='w-40 px-2 py-2 bg-blue-300 rounded-lg' value='Submit' type='submit' />
    {result && <p className='underline font-bold'>Your Results: {result}</p> }
    </div>
    </div>
    </div>
  )
}

export default Diagnose