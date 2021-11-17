import React,{useState} from 'react'

export default function App() {
    const [count, setCount] = useState(0);
    function btnClick(){
        setCount(count+10);
        setCount(count+10);
        setCount(count+10);
        setCount(count+10);
    }
    function btnClick2(){
        setCount((prev)=>prev+10);
        setCount((prev)=>prev+10);
        setCount((prev)=>prev+10);
        setCount((prev)=>prev+10);
    }
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={e=>setCount((prevstate)=>prevstate+10)}>+10</button>
            <button onClick={e=>btnClick()}>+40(合并)</button>
            <button onClick={e=>btnClick2()}>+40(不合并)</button>
        </div>
    )
}
