function Card({img,name,email}) {

  
  return (
    <>
     
     <div className="bg-slate-200 w-[220px] text-center h-[200px] rounded-lg flex flex-col flex-grow p-3">
        <img src={img} className="w-32 inline h-32 mx-auto rounded-full object-cover" alt="" />
        <h1>{name}</h1>
        <p className="truncate">{email}</p>
    </div>
    


    
    </>
  )
}

export default Card;
