import { useState } from "react";
import api from "../api/axios";
import axios from "axios";

export function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [msg, setMesg] = useState("");
  const[success,setSuccess] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await api.post("/signup", form);
      setMesg(response.data.message);
      setForm({
        name:'',
        email:"",
        password: ""
      })
      setTimeout(() => {
        setMesg("")
      }, 2000);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setMesg(err.response?.data?.message || "Something went wrong!please try again");
      } else {
        setMesg("Something went wrong! please try again");
      }
        setTimeout(() => {
        setMesg("")
      }, 2000);
    }
  };

  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
      <div className="w-full max-w-[350px] p-8  rounded-3xl border-4 border-solid border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] ">
         <div className="w-full p-8 rounded-2xl bg-slate-900 flex flex-col justify-center items-center  ">
        <h2 className="text-2xl text-white font-bold">Welcome Back</h2>
          <div className="w-10 h-[2px] bg-blue-500 mt-2 mb-6"></div>
     
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-4 ">
          <input
          className="w-full p-2 rounded-lg bg-slate-800 text-white placeholder-gray-500 outline-none focus:ring-2 focus:ring-blue-500 "
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
          className="w-full p-2 rounded-lg bg-slate-800 text-white placeholde-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
          className="w-full p-2 rounded-lg bg-slate-800 text-white placheolder-gray-500 outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
          />
          <button type="submit" className="w-full mt-2 p-1.5 rounded-lg bg-blue-600  hover:bg-blue-500 text-white font-bold active:scale-95 transition duration-300 cursor-pointer">Signup</button>
        </form>
           {msg &&(
            <div className={`p-1 mt-1 rounded-lg font-sm ${
              success?'bg-green-100 text-green-700':'bg-red-100 text-red-700'     
            }`}>
                 {msg}
            </div>
           )} 
      </div>
      </div>
     
    </div>
  );
}
