import React, { useState } from 'react'
import { addtolocalhost } from './Services/allApi'
import './search.css'
import { GoogleGenerativeAI } from '@google/generative-ai'
function Searchbar() {
    const[textt,settextt]=useState()
    var prompt=""
    const API_KEY='AIzaSyAkVSK5X73IXCmhzBDJAnm66EC3nUQxVH8'
    // const { GoogleGenerativeAI } = require("@google/generative-ai");

    // Access your API key as an environment variable (see "Set up your API key" above)
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    const run=async()=>{
      // For text-only input, use the gemini-pro model
      const model = genAI.getGenerativeModel({ model: "gemini-pro"});
    
    //   const prompt = "name the districts in kerala"
    
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      console.log(response.candidates[0].content.parts[0].text);

      settextt(response.candidates[0].content.parts[0].text);
    // settextt(response.text())
    //   console.log(text);
    }
    
    

    const[searchtags,setSearchtags]=useState("")
    const [serachArray,setSerachArray]=useState([])
    var arrays=[]
    var index=0
    const handleSearchArray=(e)=>{
        e.preventDefault()
       prompt=searchtags
       run();

        
      
        
    }

    

    // const handleapicall=async()=>{
    //     if(searchtags){
    //        await addtolocalhost(searchtags)
    //     }
    // }

  return (
    <div className='fullbackground d-flex flex-column bg-dark justify-content-center  w-100' style={{height:'100vh'}}>
        <div className='d-flex justify-content-center' style={{marginTop:'150px'}}>
        <div className='d-flex justify-content-center' style={{width:'600px'}}>
        <input placeholder='Search Here' type="text" className='form-control '  onChange={e=>setSearchtags(e.target.value)}/>
        <button className='btn btn-outline-info ms-3' onClick={e=>handleSearchArray(e)}><i className="fa-solid fa-magnifying-glass text-light" ></i></button>
        </div>
       
        </div>
        <div className='d-flex mt-5 justify-content-center '>
        <div className='bg-light text-center' style={{width:'600px',height:'450px',overflow:'auto'}}> <p className='mt-5'>{textt}</p></div>
        </div>
    </div>
  )
}

export default Searchbar