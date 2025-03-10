import styled from "styled-components"
import { ToInitial, MarkAllComplete, MarkAllInComplete, RemoveAll, handleAddItem } from "./functions.js";
import { useState } from "react";


const SideBar=({list, setList,initial})=>{
    
  const [value,setValue]=useState("")
  const names=list.map((item)=>item.name.toLowerCase())
  const[error,setError]=useState("")

    const handleChange=(e)=>{
      setValue(e.target.value)
    }

    const handleSubmit=(e,value,handleAddItem,list,setList,names)=>{
      e.preventDefault()
      if(names.includes(value)){
        setError("same text...")
        setTimeout(()=>{ setError("")},1000)
        setValue("")
         return
      }
      if(value.trim()===''){
        setError("Empty text...")
        setTimeout(()=>{ setError("")},1000)
        return
      }
      handleAddItem(value,list,setList)
      setValue("")
    }

    return(
        <Stdiv>
            <form onSubmit={(e)=>handleSubmit(e,value,handleAddItem,list,setList,names)} className="topContainer">
                <h4>Add an Item</h4>
                <input autoFocus type="text" value={value} onChange={handleChange} placeholder="enter text..."/>
                {error&&<div className="error">{error}</div>}
                <button className="btn mainBtn">Add to List</button>
            </form>
            <div className="btnContainer">
                <button className="btn" onClick={()=>MarkAllComplete(list,setList)}>Mark as all complete</button>
                <button className="btn" onClick={()=>MarkAllInComplete(list,setList)}>Mark as all incomplete</button>
                {initial.length?<button className="btn" onClick={()=>ToInitial(initial,setList)} >Reset to initial</button>:""}
                <button className="btn" onClick={()=>RemoveAll(setList)}>Remove all items</button> 
            </div>
        </Stdiv>
    )
    }
export default SideBar



const Stdiv=styled.div`
   padding: 1rem;
   background-color:#f8e2ca10 ;
   grid-column: 6 /  7;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
  
   .error{
    color: red;
   }
   .topContainer{
    flex:1;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   .mainBtn{
    width:100%;
    background-color: #5d3b20e9;
   }
   input[type="text"]{
    width: 100%;
    padding: .5rem;
    &:focus{
        outline: none;
    }
   }
}
  
   .btnContainer{
    flex:3;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    width: 90%;
   }
   .btn{
    width:100%;
    height: 2rem;
    background-color: #5d3b20c6;
    cursor: pointer;
    border-radius: .2rem;
    margin-bottom: .2rem;
   }
   
   `;