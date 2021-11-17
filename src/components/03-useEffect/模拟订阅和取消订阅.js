import React,{useState,useEffect} from 'react'

export default function Eff() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title=count
        console.log("订阅成功")
        return () => {
            console.log("订阅取消")
        }
    })
    return (
        <div>
             <h2>{count}</h2>
            <button onClick={e=>setCount(count+1)}>+1</button>
        </div>
    )
}
