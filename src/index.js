import React ,{Suspense}from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import RootLayout from "./pages/RootLayout";
import Index from "./pages/Index";
import ErrorPage from "./pages/ErrorPage";
import { Provider } from "react-redux";
import store from "./state";
const AddPost=React.lazy(()=>import ("./pages/addPost"));
const EditPost=React.lazy(()=>import ("./pages/EditPost"));
const Details=React.lazy(()=>import ("./pages/Details"));
const constposthandler=({params})=>{
    
    if(isNaN(params.id)){
    throw new Response("Bad Request",{status:400,statusText:"Bad Request"});
    }
    }
const router=createBrowserRouter([
  {
  path:"/",
  element:<RootLayout/>,
  errorElement: <ErrorPage/>,
  children:[
    { index:true,  element: <Index/> },
    { path:"post", element: <Index/> },
    { path:"post/add",  element: <Suspense fallback=" loading pleasse wait"> <AddPost/></Suspense>},
    { path:"post/:id", 
    element: <Suspense fallback=" loading pleasse wait"> <Details/></Suspense>,
    loader:constposthandler,
    },
    { path:"post/:id/edit", element: <Suspense fallback=" loading pleasse wait"> <EditPost/></Suspense>,
    loader:constposthandler},
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  // </React.StrictMode>
);
