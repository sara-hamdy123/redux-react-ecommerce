import { useSelector } from "react-redux"
const WithGuradrs = (Component) => {
   const Wraper=(props)=>{
    const {isloggedIn}=useSelector((state)=>state.auth);
    return(
       isloggedIn? <Component {...props} />: <p>please enter loggin in first</p>
    )
   };
    return Wraper;
};
export default WithGuradrs
