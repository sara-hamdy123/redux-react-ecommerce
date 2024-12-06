import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { getPost } from '../state/PostSlics';
import { useParams } from 'react-router-dom';
const usePostDetails=()=>{
const {id} =useParams();
    const dispatch=useDispatch();
    const {loading,error,record} =useSelector((state)=>state.posts);
    console.log(record);
    useEffect(()=>{
    dispatch(getPost(id));
    },[dispatch, id]);
return(
loading,error,record
)
};
export default usePostDetails;