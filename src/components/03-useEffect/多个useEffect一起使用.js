import React,{useState,useEffect} from 'react'
//useEffect,两个参数，第一个参数接受回调函数，回调函数有回调函数，订阅和取消
//第二个参数为数组，为依赖数组，空则不执行
export default function Use() {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("修改DOM");

    },[]);
    useEffect(() => {
        console.log("订阅事件");

    },[])
    useEffect(() => {
        console.log("网络请求")
    }, [])
    return (
        <div>
            <button onClick={e=>setCount(count+1)}>+1</button>
        </div>
    )
}
