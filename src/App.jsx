import { useForm } from "react-hook-form"
import Card from "./components/Card";
import { useState } from "react";
function App() {

  let {register,handleSubmit,reset} = useForm();
  let [value, setValues] = useState([])
  let [showSuccessMessage, setShowSuccessMessage] = useState("hidden");


  function func(data) {
    let name = data.name;
    let img = data.img;
    let email = data.email;

    setValues((prev) => [...prev , <Card  img = {img} name= {name} email = {email}/>])
      setShowSuccessMessage("block")
     setTimeout(()=> {
      setShowSuccessMessage("hidden")
     },2000)

    reset();
  }
  return (
    <>
          

     <div className="flex justify-end mb-0">
     
        <div className={`w-[400px] bg-green-400 p-2 transition-all rounded-xl ${showSuccessMessage}`} >
          <h1 className="font-bold text-xl">Data inserted successfully...</h1>
        </div>
      
     
      
     </div>
      
     
      
     <div className="bg-slate-200 w-[500px] mt-16 mx-auto p-2 rounded-xl">
     
      <form action="" onSubmit={handleSubmit(func)}>
        <input type="text" placeholder="img" {...register('img')} className="bg-slate-400 w-full mt-2  placeholder:text-slate-700 p-2" />
        

        <input type="text" placeholder="name" {...register('name')} className="bg-slate-400 w-full placeholder:text-slate-700 mt-2 p-2" />
        
      
        <input type="email" placeholder="email" {...register('email')} className="bg-slate-400 w-full  placeholder:text-slate-700 mt-2 p-2" />
        
        

        <input type="submit" value="submit" className="text-white bg-black p-2 mt-2 rounded-lg" />
      </form>
     </div> 
    

    <div className="flex flex-wrap w-[950px] bg-slate-300 mt-10 mx-auto gap-3 flex-grow-1">
       {
          value.length > 0 ? value.map((item, index) => (
            <div key={index}  className="flex-grow">{item}</div> 
          )) : <h1 className="mx-auto mt-5 font-bold text-xl">Enter details to load card</h1>
       }
    
      
      
    </div>
    

    
    </>
  )
}

export default App
