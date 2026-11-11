import {createBrowserRouter,RouterProvider} from 'react-router';
import Home from './pages/Home'
import {Login} from './pages/Login'
import {Signup} from './pages/Signup'
import { ProductDetail } from './pages/productDetail';


const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/login',element:<Login/>},
  {path:'/signup',element: <Signup/>},
  {path:'/productDetail',element: <ProductDetail />}

])

export default function App(){
  return <RouterProvider router={router}/>
}




