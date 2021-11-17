import React,{useCallback,useState}  from 'react'

export default function Callback() {
    const [count, setCount] = useState(0)
    const increment=()=>{
        setCount(count+1);
    }
    const increment2=useCallback(
        () => {
            setCount(count+1);
        },
        [],
    )
    return (
        <div>
            <h2 >计数器：{count}</h2>
            <button onClick={increment}>+1</button>
            <button onClick={increment2}>+1111</button>
        </div>
    )
}
