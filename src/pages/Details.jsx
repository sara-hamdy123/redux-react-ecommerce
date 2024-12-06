import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../components/Loading';
import usePostDetails from '../hooks/use-post-detail';
const Details = () => {
const {loading,error,record}=usePostDetails();
const dispatch=useDispatch();
useEffect(()=>{
  return(
    dispatch({type:"posts/cleanrecord"})
  );
  },[dispatch])
  return (
    <div>
      <Loading loading={loading} error={error}>
      <p>title:{record?.title}</p>
      <p>des:{record?.description}</p>
      </Loading>
    </div>
  )
}

export default Details
