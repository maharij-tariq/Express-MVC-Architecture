import { useEffect,useState } from "react";

function App(){
  const[data,useData] = useState('')
  useEffect(()=>{
     fetch("http://localhost:5003/get/message")
     .then((response)=> response.json())
     .then((data)=> useData(data.message))
     .catch((error)=> console.log("Error:",error.message))
  },[])

  return (
    <div>
      <h1>data form api:</h1>
      <p>{data}</p>

    </div>
  )
}

export default App;