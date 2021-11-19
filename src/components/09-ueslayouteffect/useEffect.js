import React,{useState,useEffect} from 'react'

export default function Ueslayouteffect() {
    const [count, setCount] = useState(10)
    useEffect(() => {
        if(count===0){
            setCount(Math.random()*10)
        }
    }, [count])
    return (
        <div>
            <h2>计数器:{count}</h2>
            <button onClick={e=>setCount(0)}>change</button>
        </div>
    )
}

