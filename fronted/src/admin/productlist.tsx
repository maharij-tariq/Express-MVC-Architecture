
import { useEffect, useState } from "react";
import { Link } from "react-router";
import api from "../api/axios";

interface Product {
  _id: string;
  title: string;
  price: number;
  category: string;
  images: string[];
  stock: number;
}

export function ProductList() {
  const [product, setProduct] = useState<Product[]>([]);

  const loadfunction = async () => {
    try {
      const response = await api.get("/api/product");

      console.log("API response:", response.data);

      setProduct(response.data.product);

    } catch (error) {
      console.error("Error loading products:", error);
      setProduct([]);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await api.delete(`/api/product/delete/${id}`);

      alert("Product deleted successfully");

      loadfunction();

    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    loadfunction();
  }, []);

  return (
    <div className="p-4">

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Product List</h2>

        <Link
          to="/api/product/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add New Product
        </Link>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 border">Title</th>
            <th className="p-3 border">Price</th>
            <th className="p-3 border">Category</th>
            <th className="p-3 border">Action</th>
          </tr>
        </thead>

        <tbody>
          {product.map((p) => (
            <tr key={p._id}>
              <td className="p-3 border">{p.title}</td>
              <td className="p-3 border">Rs {p.price}</td>
              <td className="p-3 border">{p.category}</td>

              <td className="p-3 border">
                <Link
                  to={`/api/product/edit/${p._id}`}
                  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </Link>

                <button
                  onClick={() => deleteProduct(p._id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
