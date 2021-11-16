import React,{useState} from 'react'
export default function App() {
    const [count,setCount]=useState(0);
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={e=>{setCount(count+1)}}>+1</button>
        </div>
    )
}
