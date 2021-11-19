import React,{useRef,useState,useEffect}from 'react'

export default function Ref() {
    const [count, setCount] = useState(0)
    const title = useRef(count)
    // effect 将在每轮渲染结束后执行
    useEffect(() => {
        title.current=count;
    }, [count])
    /*
    setCount执行，count
    */
    return (
        <div>
            <h2>state:{count}这一次</h2>
            <h2 ref={title}>ref:{title.current}上一次</h2>
            <button onClick={e=>setCount(count+1)}>+1</button>
        </div>
    )
}
