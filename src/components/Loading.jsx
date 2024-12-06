import React from 'react'
const Loading = ({loading,error,children,records}) => {
const elementtype=children?.type?.render?.displayName;
const renderhandler=()=>{
if(elementtype==="Button"){
    const clonebutton= React.cloneElement(children,{disabled:true},"loading...");
return(
<>
{loading? 
        {clonebutton}
        : 
        error?
        <>
        {children}
        <p> <br></br>
        {error}</p> 
        </>
        :
        {children}
        }
</>
)
}
return(
<>
{loading? 
        <p colSpan={3}>
        loading 
        </p>
        : 
        error?
        <p colSpan={3}>
        error from server {error}
        </p>
        :
        {children}
        }
</>
)
}

  return (
renderhandler()
  )
}

export default Loading
