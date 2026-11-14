import { useState } from "react"
import api from '../api/axios'
import {useNavigate } from "react-router";
import axios from "axios";

export function Login(){
const[form,setForm] = useState({
    email:'',
    password: '',
})
const[msg,setMesg] = useState('');
const[success,setSuccess] = useState(false)
const navigate = useNavigate();

 const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setForm({
        ...form,
        [e.target.name]:e.target.value
    })
 }
 const handleSubmit = async(e:React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault();
    try {
        const response = await api.post('/login',form)
        localStorage.setItem('token',response.data.token)
        setMesg('Login Successfully')
        setTimeout(() => {
            navigate('/')
        }, 2000);
    } catch (err) {
      if(axios.isAxiosError(err)){
      setMesg(err.response?.data?.message || "Something Went! Wrong Try Again")
      }else{
        setMesg('SomeThing Went Wrong!')
      }
        
    }
 }
    return(
       <div className="w-full h-screen bg-black flex flex-col justify-center items-center">
        <div className="w-full max-w-[350px] border-4 border-solid border-blue-500 shadow-[0_0_25px_rgba(59,130,246,0.5)] rounded-3xl p-8  ">
          <div className="w-full  p-8 bg-slate-900  rounded-2xl  flex flex-col justify-center items-center">
            <h2 className="text-lg font-bold text-white mb-3">Login to your Account</h2>
            <div className="w-10 h-[2px] bg-blue-500 mt-1 mb-6"></div>
            <form onSubmit={handleSubmit} className="w-full   flex flex-col gap-2 ">
               <input type="text" name="email" placeholder="Enter your Email"
               className="w-full rounded-lg p-2 bg-slate-800 placeholder-gray-500 text-white outline-none focus:ring-2 focus:ring-blue-500"
               value={form.email}
               onChange={handleChange}
               />
               <input type="password" name="password" placeholder="Enter your Password"
                className="w-full rounded-lg p-2 bg-slate-800 placeholder-gray-500 text-whte outline-none focus:ring-2 focus:ring-blue-500" 
               value={form.password}
               onChange={handleChange}
               />
               <button className="w-full rounded-lg bg-blue-600 py-2 px-2  text-white hover:bg-blue-500 font-bold cursor-pointer active:scale-95 transition-colors duration-300 ease-in-out" type="submit">Login</button>
            </form>
        {msg && (
  <div
    className={`p-1 mt-1 rounded-lg font-sm ${
      success
        ? 'bg-green-100 text-green-700'
        : 'bg-red-100 text-red-700'
    }`}
  >
    {msg}
  </div>
)}
          </div>
        </div>
       </div>
    )
}