import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../api/axios";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
}

export const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product | null>(null);

  const loadProduct = async () => {
    try {
      const response = await api.get(`/api/product/${id}`);
       
    console.log("API Response:", response.data);
      setProduct(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadProduct();
  }, [id]);

  if (!product) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.images[0]?.replace(/"/g, "")}
            alt={product.title}
            className="w-full h-80 object-contain rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <p className="text-gray-600">{product.description}</p>

          <h2 className="text-2xl font-bold text-blue-600">${product.price}</h2>

          <p>Category: {product.category}</p>

          <p>Stock: {product.stock}</p>

          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
