import React from 'react'
import PostList from '../components/PostList'
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchposts,deletePost } from '../state/PostSlics';
import Loading from '../components/Loading';
import { useCallback } from 'react';
const Index = () => {
const dispatch=useDispatch();
const {records,loading,error}=useSelector((state)=>state.posts);
const {isloogedIn}=useSelector((state)=>state.auth);
useEffect(()=>{
dispatch(fetchposts())
},[dispatch]);
const delterecords=useCallback((id)=>dispatch(deletePost({id})),[dispatch])
  return (
  <Loading loading={loading} error={error}>
    <PostList data={records}  delterecords={delterecords} isloogedIn={isloogedIn} />
  </Loading>
  )
}

export default Index
