import { v4 as uuidv4 } from 'uuid';

export const handleAddItem=(newValue,list,setList)=>{
    const newArr=[...list, {name:newValue,  id:uuidv4(), checked:false,}]
    setList(newArr)
  }

export const handleChange=(item,list,setList)=>{
     const newArr=list.map((elem)=>{
      if(elem.id===item.id){
          return {...elem, checked:!elem.checked}
      }else{
          return {...elem}
      }
     })
     setList(newArr)
  }
  
export  const handleDelete=(item,list,setList)=>{
    const newArr=list.filter((elem)=>{
      if(elem.id!==item.id){
          return elem 
      }
    })
    setList(newArr)
  }

export  const MarkAllComplete=(list,setList)=>{
      const newArr=list.map((item)=>{
          return {...item,checked:true}
      })
      setList(newArr)
  }

export  const MarkAllInComplete=(list,setList)=>{
      const newArr=list.map((item)=>{
          return {...item,checked:false}
      })
      setList(newArr)
  }

export  const handleEdit=(item,editName,list,setList)=>{
    const newArr=list.map((elem)=>{
      if(elem.id===item.id){
          return {...elem, name:editName}
      }else{
          return {...elem}
      }
    })
    setList(newArr)
  }
export  const ToInitial=(initial,setList)=>{
      setList(initial)
  }
export const RemoveAll=(setList)=>{
      setList([])
  }