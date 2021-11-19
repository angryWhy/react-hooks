import React ,{useRef}from 'react'

export default function Use() {
    const title=useRef();
    const in1=useRef();
   function btnClick(){
        title.current.innerHTML="123"
        in1.current.focus();
    }
    // 无法拿到函数组件
    return (
        <div>
            <h2 ref={title}>11111</h2>
            <input ref={in1} type="text"/>
            <button onClick={e=>btnClick()}>change</button>
        </div>
    )
}
