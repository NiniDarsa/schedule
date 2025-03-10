import styled from "styled-components"
import Item from "./Item"
import { v4 as uuidv4 } from 'uuid';
import Select from "./Select";
import { useMemo } from "react";
import UseLocalStorage from "./UseLocalStorage";


const Content=({list,setList,open})=>{
  const[select,setSelect]=UseLocalStorage("select", "default")

    const handleSelectChange=(e)=>{
        setSelect(e.target.value)
    }

    const sortedList=useMemo(()=>{
       if(select==="checked"){
         return [...list].sort((a,b)=>{
            return  b.checked-a.checked
         })
       }else if(select==="unchecked"){
        return [...list].sort((a,b)=>{
            return a.checked-b.checked
         })
       }else{
        return [...list]
       }
    },[select, list])
    
    // const sortedList=useMemo(()=>[...list].sort((a,b)=>{
    //   if(select==="checked"){
    //     return  b.checked-a.checked
    //   }else if(select==="unchecked"){
    //     return a.checked-b.checked
    //   }else{
    //     return [...list]
    //   }
    // }),[select, list])
    
    return(
        <StyledMain>
          {sortedList.length>0?<>
            <Select select={select} handleSelectChange={handleSelectChange} />
            {sortedList.map((item)=>{
                    return <Item key={uuidv4()} item={item} list={list} setList={setList} open={open}/>
                })}</>:<div className="text">Enter Text...</div>
            }
        </StyledMain>
    )
    }
 
 
 export default Content

const StyledMain=styled.main`
grid-column: 1 / 6;
padding: 1rem 0;
border-right: 1px solid #c0c0c0b0;
text-align: center;
position: relative;
.text{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}
`