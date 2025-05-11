import { useEffect, useState } from "react"

export default function Ttt(props){

    useEffect(()=>{
        get()
    },[])

    const [categories , setcategories] = useState([])
    const get = () => fetch('http://localhost:8000/categories/').then(resp=>resp.json()).then(resp=>setcategories(resp))
    
    const display = ()=> {
        return categories.map((cat,key)=>{
            return <div key={key} className="my-5 p-3 text-white rounded bg-gray-400 hover:bg-gray-600">{cat.name}</div>
        })
    }
    return (
        <>
        {display()}
        </>
    )
}