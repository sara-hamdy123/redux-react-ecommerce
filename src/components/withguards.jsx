import React from 'react';
import  { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Withguards = ({children}) => {
const navigate=useNavigate();
const {isloggedIn}=useSelector((state)=>state.auth);
const newcomponent=React.cloneElement(children,{title:"sad"});
useEffect(()=>{
if((!isloggedIn))navigate("/")
},[isloggedIn,navigate]);
  return newcomponent
}

export default Withguards
