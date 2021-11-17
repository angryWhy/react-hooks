import React, { useState, useMemo } from 'react'
function cul(count) {
    console.log("cul渲染");
    let total = 0;
    for (let i = 0; i < count; i++) {
        total += i;
    }
    return total;
}
export default function useMemo的应用() {
    console.log("渲染");
    const [count, setCount] = useState(10);
    const [show, setShow] = useState(true)
    const res=useMemo(() => cul(count), [count])
    return (
        <div>
            <h2>总数{res}</h2>
            <button onClick={e => setCount(count + 1)}>+1</button>
            <button onClick={e=>setShow(!show)}>切换</button>
        </div>
    )
}
