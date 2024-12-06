import { memo } from 'react';
import React from 'react'
import {
    Table,
  } from "react-bootstrap";
import PostListItem from './PostListItem';
const PostList = ({data,delterecords,isloggedIn}) => {
// console.log(error);
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th style={{ width: "70%" }}>Title</th>
        <th style={{ width: "10%" }}></th>
      </tr>
    </thead>
    <tbody>
    <PostListItem data={data} delterecords={delterecords} isloggedIn={isloggedIn}/>
    </tbody>
  </Table>
  )
}
export default memo(PostList);
