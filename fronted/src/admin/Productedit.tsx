
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import api from "../api/axios";

interface Product {
    _id: string;
    title: string;
    description?: string;
    price: number;
    category: string;
    images: string[];
    stock: number;
}

export function Productedit() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        images: "",
        stock: ""
    });

    const allowfield = [
        "title",
        "description",
        "price",
        "category",
        "images",
        "stock"
    ];

   const loadproduct = async () => {
    try {
        const response = await api.get(`/api/product/${id}`);

        console.log("Response:", response.data);
        console.log("ID:", id);

        const product: Product = response.data.data;

        console.log("Product:", product);

        setForm({
            title: product.title,
            description: product.description || "",
            price: String(product.price),
            category: product.category,
            images: product.images.join(", "),
            stock: String(product.stock)
        });

    } catch (error) {
        console.log(error);
    }
};

    useEffect(() => {
        loadproduct();
    }, [id]);

    const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
) => {
    const { name, value } = e.target;

    setForm(prev => ({
        ...prev,
        [name]: value
    }));
};

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        try {
            const updatedData = {
                ...form,
                price: Number(form.price),
                stock: Number(form.stock),
                images: form.images
                    .split(",")
                    .map(img => img.trim())
                    .filter(Boolean)
            };

            await api.put(
                `/product/update/${id}`,
                updatedData
            );

            alert("Product updated successfully");
            navigate("/");

        } catch (error) {
            console.log(error);
            alert("Product update failed");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">

                <h2 className="text-2xl font-bold text-center mb-5">
                    Edit Product
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">

                    {allowfield.map((key) => (
                        <input
                            key={key}
                            name={key}
                            value={form[key as keyof typeof form]}
                            onChange={handleChange}
                            placeholder={key}
                            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                        />
                    ))}

                    <button
                        type="submit"
                        className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95"
                    >
                        Update Product
                    </button>

                </form>
            </div>
        </div>
    );
}
