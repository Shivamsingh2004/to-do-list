"use client"

import React,{useState} from 'react';

export const Header = () => {
    
    const [title, settitle] = useState("");
   const [desc, setdesc] = useState("") ;
   const [mainTask ,setMaintask ] = useState([]);
   
   const stopreload = (e)=>{
    e.preventDefault();
    setMaintask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask);

   

   };


   const Deletehandler= (i) =>{
      let copyarry = [...mainTask]
      copyarry.splice(i,1);
      setMaintask(copyarry)
   }
   
   const compeletehandler = (i) => {
  const updatedTasks = [...mainTask];
  updatedTasks[i].completed = !updatedTasks[i].completed;
  setMaintask(updatedTasks);
};



    
     
    
    
   let rendertask = <h2> NO Task Available</h2>;
   if(mainTask.length>0){
    rendertask = mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-between mb-8 '>
          <div className='flex justify-between items-center w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <h6 className='text-2xl font-semibold'> {t.desc}</h6>
            <button
                className={`${
                  t.completed ? 'bg-green-700' : 'bg-blue-800'
                } border-b-zinc-800 m-8 px-4 py-2 text-white font-bold rounded-2xl font-serif`}
                onClick={() => {
                  compeletehandler(i);
                }}
              >
                {t.completed ? 'Done ✅' : 'Mark Done'}
              </button>

            
            <button className='bg-red-700  border-b-zinc-800  m-8 px-4 py-2 text-white font-bold  rounded-2xl font-serif'
            onClick={()=>{
              Deletehandler(i)
              }} >  Delete</button>
            
          </div>
        </li>
      )
    });

   }
  return (
    <>
   
     
    
      <div>
          <h1 className=' bg-black text-center text-amber-50 text-9xl pt-3.5 font-bold  font-serif'   >To do list</h1>
      </div>
      <div className=' justify-center flex '>
      <form onSubmit={stopreload}>
          <input type='text' className='text-2xl border-b-zinc-800 border-4 m-8 px-4 py-2 font-bold  font-serif' placeholder='Enter the task'
          value={title}
          onChange={(e)=> {
            settitle(e.target.value)
          }}/>
          <input type='text' className='text-2xl border-b-zinc-800 border-4 m-8 px-4 py-2 font-bold  font-serif' placeholder='Enter the description'
          value={desc}
          onChange={(e)=> {
            setdesc(e.target.value)
          }}/>
          <button className='bg-black border-b-zinc-800 border-4 m-8 px-4 py-2 text-white font-bold  font-serif' >  Add Task</button>

          
      </form>
      

      </div>
      <hr/>
      <div className='p-8 bg-slate-200 font-serif'>
        <ul>{rendertask}</ul>
        
        </div>    
  
    
  
    </>
    
  )
}
 