import React from 'react'
import {
    Button,
    ButtonGroup,
} from "react-bootstrap";
import { Link, useNavigate } from 'react-router-dom';
const PostListItem = ({data,delterecords,isloggedIn}) => {
const navigate=useNavigate();
const deletehandler=(item)=>{
if(window.confirm(`did you rearly want to leave ? ${item.title}`)){
    delterecords(item.id);
}    
};
    const records=data.map((el,index)=>  
        <tr key={el.id}>
        <td>#{++index}</td>
        <td><Link to={`post/${el.id}`}>{el.title}</Link></td>
        <td>
        <ButtonGroup aria-label="Basic example">
            <Button variant="success" onClick={()=>navigate(`post/${el.id}/edit`)} disabled={!isloggedIn}>Edit</Button>
            <Button variant="danger" onClick={()=>deletehandler(el)}>Delete</Button>
        </ButtonGroup>
    </td>
    </tr>
    )
return (
    <>
    {records}
    </>
)
}

export default PostListItem
