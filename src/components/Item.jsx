import styled from "styled-components"
import { RxCross2 } from "react-icons/rx";
import { FiEdit3 } from "react-icons/fi";
import { MdOutlineDone } from "react-icons/md";
import {Link} from "react-router-dom"
import { handleChange, handleDelete, handleEdit } from "./functions.js";
import { useState } from "react";



const Item=({item,list,setList,open})=>{
 const[edit,setEdit]=useState(false)
 const[editName,setEditName]=useState(item.name)

 
  return (
    <StyledItem>
        <div>
        {edit?<input type="text" autoFocus value={editName} onChange={(e)=>{setEditName(e.target.value)}}/>
        :
        <label> 
             <input type="checkbox" name={item.name} checked={item.checked} onChange={()=>handleChange(item,list,setList)} />
             <Link to={open?item.name:""}>
              {item.name}
             </Link>
        </label>
       }
        </div>
        <div className="btnContainer">
        {!edit?<button  id="edit" aria-label="edit-btn" onClick={()=>setEdit(!edit)}><FiEdit3 /></button>:<button onClick={()=>handleEdit(item,editName,list,setList)}><MdOutlineDone /></button>}
        <button  id="delete" aria-label="delete-btn" onClick={()=>handleDelete(item,list,setList)}><RxCross2 /></button>
        </div>
    </StyledItem>
  )
}
export default Item

const StyledItem=styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  padding: 0rem 1rem;
  border-bottom: 1px solid #c0c0c0b0;
  display: flex;
  justify-content: space-between;
 
 input[type="text"]{
  width: 100%;
  height: 1.5rem;
  background-color: #F4F2EE;
  border: none;
  border-bottom:1px dashed grey;
  &:focus{
    outline: none;
  }
 }
 
  input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  margin-right: .4rem;
  cursor: pointer;
   width: 1rem;
   height: 1rem;
   border:1px solid #c0c0c0b0;
   font-size: 2rem;
   position: relative;
}

input[type="checkbox"]::before {
  content: "";
  position: absolute;
  width: 1rem;
  height: 1rem;
  clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
  transform: scale(0);
  background-color:#5d3b20c6;
}

input[type="checkbox"]:checked::before {
  transform: scale(1);
}
  label{
    cursor: pointer;
    a{
      text-decoration:none;
      color:black;
    }
  }
  .btnContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
 
  button{
    cursor: pointer;
    border: none;
    font-size: 1rem;
    background-color: transparent;
    color:red;
    height: 100%;
   
    display: flex;
    justify-content: center;
    align-items: center;
    &:first-child{
      margin-right: 1rem;
      color: black;
    }
  }
`