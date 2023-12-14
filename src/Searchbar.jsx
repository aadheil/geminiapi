import React, { useState } from 'react'
import { addtolocalhost } from './Services/allApi'
import './search.css'
import { GoogleGenerativeAI } from '@google/generative-ai'
function Searchbar() {
    const[textt,settextt]=useState()
    const[istext,setistext]=useState(true)
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
      var text = response.text();
      console.log(response.candidates[0].content.parts[0].text);
      
      settextt(response.candidates[0].content.parts[0].text);
      if(text?.length>1){
        setistext(true)
      }
       
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
       settextt()
       setistext(false)
       run();

        
      
        
    }

    

    // const handleapicall=async()=>{
    //     if(searchtags){
    //        await addtolocalhost(searchtags)
    //     }
    // }

  return (
    <div className='fullbackground d-flex flex-column justify-content-center  w-100 ' style={{height:'100vh',backgroundColor:'#16191E'}}>
        <div className='d-flex justify-content-center' style={{marginTop:'150px'}}>
        <div className='d-flex justify-content-center' style={{width:'600px'}}>
        <input placeholder='Search Here' type="text" className='form-control '  onChange={e=>setSearchtags(e.target.value)}/>
        <button className='btn btn-outline-light ms-3'  onClick={e=>handleSearchArray(e)}><i className="fa-solid fa-magnifying-glass text-info" ></i></button>
        </div>
       
        </div>
        <div className='d-flex mt-5 justify-content-center'>
        <div className='bg-dark text-center p-5 rounded justify-content-center d-flex' style={{width:'600px',height:'450px',overflow:'auto'}}><p className=' text-light'>{textt}</p>
        
       { !istext&& <div className="text-light d-flex justify-content-center align-items-center w-100" style={{height:'100%'}}>
        <div className='loader'></div>
       </div>
       
       }
        </div>
        </div>
    </div>
  )
}

export default Searchbar