import React, { useState, useMemo } from 'react'

export default function Use() {
    console.log("渲染");
    const [count, setCount] = useState(10);
    const [show, setShow] = useState(true);
    //useMemo包裹，依赖数组为空
    const info=useMemo(() => {return {name:"string",age:"18"}}, [])
    return (
        <div>
            <h2></h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e=>setShow(!show)}>切换</button>
        </div>
    )
}
