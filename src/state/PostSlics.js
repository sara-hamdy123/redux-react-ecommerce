import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
const initalstate={records:[],loading:false,error:null,record:null};
export const fetchposts=createAsyncThunk("posts/fetchposts",async(_,thunkapi)=>{
const {rejectWithValue}=thunkapi;
try {
const res= await fetch("http://localhost:5000/posts");
const data= await res.json();
return data;
} catch (error) {
    return rejectWithValue(error.message);
}
});
export const getPost=createAsyncThunk("posts/fetchPost",async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
    try {
        const res= await fetch(`http://localhost:5000/posts/${id}`);
        const data= await res.json();
        return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
})
export const deletePost=createAsyncThunk("posts/deletePost",async(id,thunkapi)=>{
    const {rejectWithValue}=thunkapi;
try {
await fetch(`http://localhost:5000/posts/${id}`,{
method:"DELETE",
});
    return id;
} catch (error) {
    return rejectWithValue(error.message);
}

})
export const insertpost=createAsyncThunk("posts/insertPost",async(item,thunkapi)=>{
    const {rejectWithValue ,getState}=thunkapi;
    const {auth} =getState();
    item.userid=auth.id;
    try {
     const res=await fetch(`http://localhost:5000/posts`,{
     method:"POST",
     body: JSON.stringify(item),
     headers:{
     "Content-type":"application/json: charset-UTF-8",
     }
     });
     const data=await res.json();
     return data;
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})
export const editPost=createAsyncThunk("posts/edittPost",async(item,thunkapi)=>{
    const {rejectWithValue }=thunkapi;
    try {
     const res=await fetch(`http://localhost:5000/posts/${item.id}`,{
     method:"PATCH",
     body: JSON.stringify(item),
     headers:{
     "Content-type":"application/json: charset-UTF-8",
     }
     });
     const data=await res.json();
     return data;
        
    } catch (error) {
        return rejectWithValue(error.message);
    }
})

const PostSlice=createSlice({
name:"posts",
initalstate,
reducers:{
cleanrecord:((state)=>state.record=null)
},
extraReducers:{
//get post
[getPost.pending]:(state)=>{
    state.loading=true;
    state.error=null;
},
    //create post
    [getPost.fulfilled]:(state,action)=>{
    state.loading=false;
    state.record=action.payload;
},
    //fetch post
    [getPost.rejected]:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
},
//fetch post
[fetchposts.pending]:(state)=>{
state.loading=true;
state.error=null;
},
//create post
[fetchposts.fulfilled]:(state,action)=>{
state.loading=false;
state.records=action.payload;
},
//fetch post
[fetchposts.rejected]:(state,action)=>{
state.loading=false;
state.error=action.payload;
},
//delete post 
[deletePost.pending]:(state)=>{
    state.loading=true;
    state.error=null;
},
[deletePost.fulfilled]:(state,action)=>{
    state.loading=false;
state.records=state.records.filter(el=>el.id !== action.payload)
},
[deletePost.rejected]:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
},
//insert post
[insertpost.pending]:(state)=>{
    state.loading=true;
    state.error=null;
},
[insertpost.fulfilled]:(state,action)=>{
    state.loading=false;
    state.records.push(action.payload);
},
[insertpost.rejected]:(state,action)=>{
    state.loading=false;
    state.error=action.payload;},

},
[editPost.pending]:(state)=>{
    state.loading=true;
    state.error=null;
},
[editPost.fulfilled]:(state,action)=>{
    state.loading=false;
    state.record=action.payload;
},
[editPost.rejected]:(state,action)=>{
    state.loading=false;
    state.error=action.payload;
},
},
);
export default PostSlice.reducer;