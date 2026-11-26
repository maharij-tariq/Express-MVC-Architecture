import React from 'react';
import {createBrowserRouter,RouterProvider} from 'react-router';
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Signup} from './pages/Signup'
import ProductDetail from './pages/productDetail';
import  {Addproduct}  from './admin/addproduct'
import  {ProductList}  from './admin/productlist';
import  {Productedit}  from './admin/Productedit';


const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/login',element:<Login/>},
  {path:'/signup',element: <Signup/>},
   { path: '/product/:id', element: <ProductDetail /> },
  {path: '/api/product',          element: <ProductList /> },
  {path: '/api/product/add',      element: <Addproduct /> },
  {path: '/api/product/edit/:id', element: <Productedit/> },



])

export default function App(){
  return <RouterProvider router={router}/>
}




