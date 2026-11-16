import React, { useState } from "react"
import api from "../api/axios"
import { useNavigate } from "react-router"

export function Addproduct() {
    const [form, setForm] = useState({
        title: "",
        description: "",
        price: "",
        category: "",
        images: "",
        stock: ""
    })
    const [mesg, setMesg] = useState('')
    const navigate = useNavigate()

    // Runs when you type in any input
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // Runs when you click "Add Product"
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()   // stop page reload
        try {
            await api.post('/api/product/add', {
                ...form,
                price: Number(form.price),    // text -> number
                stock: Number(form.stock),    // text -> number
                images: form.images.split(",").map((s) => s.trim())   // text -> array
            })
            navigate('/api/product')
        } catch (error: any) {
    console.error(error.response?.status, error.response?.data || error.message)
    setMesg(
        error.response
            ? `Error ${error.response.status}: ${error.response.data?.message || 'server error'}`
            : `Network error: ${error.message}`
    )
}
    }

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-5">Add new product</h2>

                {mesg && (
                    <p className="mb-3 p-2 rounded bg-red-100 text-red-700 text-center">
                        {mesg}
                    </p>
                )}

                <form onSubmit={handleSubmit} className="space-y-3">
                    {Object.keys(form).map((key) => (
                        <input
                            key={key}
                            name={key}
                            value={form[key as keyof typeof form]}
                            placeholder={key === "images" ? "images (url1,url2,url3)" : key}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-600"
                        />
                    ))}
                    <button
                        type="submit"
                        className="w-full px-2 py-3 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700 transition duration-200 active:scale-95"
                    >
                        Add Product
                    </button>
                </form>
            </div>
        </div>
    )
}



