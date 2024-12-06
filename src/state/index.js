import { configureStore } from "@reduxjs/toolkit";
import posts from "./PostSlics";
import auth from  "./authslice";
const store=configureStore({
reducer:{posts,auth},
});
export default store;