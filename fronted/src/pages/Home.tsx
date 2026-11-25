import { useEffect, useState } from "react"
import api from "../api/axios"
import { Link } from "react-router"
interface Product {
    _id: string;
    title: string;
    images: string;
    price: string;
}
export const Home = () => {
    const[product,setProduct] =  useState<Product[]>([])
    const[search,setSearch] = useState('')
    const[category,setCategory] = useState('')

    const loadProduct  = async()=>{
        const response = await api.get(`api/product`,{
            params:{
                search,
                category
            }
        })
        setProduct(response.data.product)
    }
useEffect(()=>{
    loadProduct();
},[search,category])
  return (
    <div className="bg-gray-100 min-h-screen px-6 py-6">
        <div className="flex justify-between items-center gap-4 mb-8">
            <input type="text" placeholder="Search Product...." 
            value={search}
            onChange= {(e)=> setSearch(e.target.value)} 
            className="w-1/2 border border-gray-300 rounded-md outline-none py-2 px-3 focus:border-blue-500" />

        <select
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
          className="w-1/4 border bg-blue-500 border-gray-300 rounded-md py-2 px-3 outline-none focus:border-blue-500"
        >
            <option value="">All Category</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="Tablets">Tablets</option>
        </select>
        </div>
     <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
    {product.map((item) => (
        <Link
            key={item._id}
            to={`/product/${item._id}`}
            className="bg-white border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition"
        >
            <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md px-5"
            />
             
                <h2 className="text-lg font-semibold mt-3">
                    {item.title}
                    <br></br>
                    ${item.price}
                </h2>
        </Link>
    ))}
</div>
    </div>
  )
}
