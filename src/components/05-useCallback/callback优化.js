import React,{memo, useCallback,useState}  from 'react'
const HYbutton=memo((props)=>{
    console.log(`${props.title}渲染`);
    return <button onClick={props.increment}>+1</button>
})
export default function Callback() {
    console.log("渲染");
    const [count, setCount] = useState(0)
    const [show, setShow] = useState(true)
    //每次创建新函数
    const increment=()=>{
        setCount(count+1);
    }
    //usercallback,具体使用
    //在将一个组件中的函数，传递给子元素进行回调使用时，使用useCallback对函数进行处理.
    //依赖count，传给HYbutton，浅层比较
    const increment2=useCallback(
        () => {
            setCount(count+1);
        },
        [count],
    )
    return (
        <div>
            <h2 >计数器：{count}</h2>
            <HYbutton title="btn1"increment={increment}/>
            <HYbutton title="callback-btn" increment={increment2}/>
            {/* 没有绑定this指向，发生渲染次数过多错误 */}
            <button onClick={e=>setShow(!show)}>切换</button>
        </div>
    )
}
