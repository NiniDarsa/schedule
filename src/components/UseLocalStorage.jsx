import { useEffect, useState } from "react"

const getLocalStorage=(key, initial)=>{
 const val=localStorage.getItem(key)
 if(val){
    return JSON.parse(val)
 }else if(typeof initial==="function"){
   return initial()
 }else{
    return initial
 }
}

const UseLocalStorage=(key,initial)=>{
 const[value, setValue]=useState(()=>{
    return getLocalStorage(key,initial)
 })
 useEffect(()=>{
   return localStorage.setItem(key,JSON.stringify(value))
 },[value])

 return [value, setValue]
}
export default UseLocalStorage