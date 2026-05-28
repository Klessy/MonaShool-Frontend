
"use client";
import { useState } from "react";

export default function FAQ(){
  const [open,setOpen]=useState(null);

  const data=[
    {q:"Where is the school located?",a:"Nigeria"},
    {q:"Do you offer extracurricular activities?",a:"Yes we do"}
  ]

  return (
    <section className="p-10 bg-gray-100">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6 text-center">FAQ</h2>
        {data.map((item,i)=>(
          <div key={i} className="mb-4">
            <button onClick={()=>setOpen(open===i?null:i)} className="font-bold">
              {item.q}
            </button>
            {open===i && <p>{item.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
