import React, { useState } from 'react'
import { addtolocalhost } from './Services/allApi'
import './search.css'
function Searchbar() {
    const[searchtags,setSearchtags]=useState("")
    const [serachArray,setSerachArray]=useState([])
    var arrays=[]
    var index=0
    const handleSearchArray=(e)=>{
        e.preventDefault()
        serachArray.push(searchtags)
        console.log(serachArray);

        
      
        
    }

    const handleapicall=async()=>{
        if(searchtags){
           await addtolocalhost(searchtags)
        }
    }

  return (
    <div className='fullbackground d-flex bg-dark justify-content-center  w-100' style={{height:'100vh'}}>
        <div className='justify-content-center' style={{marginTop:'150px'}}>
        <div className='d-flex'>
        <input placeholder='Search Here' type="text" className='form-control ' style={{width:'450px'}}  onChange={e=>setSearchtags(e.target.value)}/>
        <button className='btn btn-outline-info ms-3' onClick={e=>handleSearchArray(e)}><i className="fa-solid fa-magnifying-glass text-light" ></i></button>
        </div>
        <div className='d-flex mt-5 justify-content-center'>
                {searchtags?
                    <>
                    <p className='text-danger'>Your Search Keys: </p>
                    <button className='text-light btn btn-outline-danger ms-5' onClick={handleapicall}>{searchtags}</button>

                    
                </>:<p className='text-danger'>No Search Keys...</p>

                }
            
        </div>
        </div>
    </div>
  )
}

export default Searchbar