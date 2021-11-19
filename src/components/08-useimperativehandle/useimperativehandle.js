import React, { useRef, forwardRef, useImperativeHandle } from 'react'


const Hybutton = forwardRef((props, ref) => {
    const inputRef=useRef();
    useImperativeHandle(
        ref,
        () => ({
            focus:()=>{
                inputRef.current.focus();
            }
        }),
        
        
    )
    return <input type="text" ref={inputRef} />
})
//暴露属性太多，需要限制条件
export default function ForwardRef() {
    const bu = useRef();
    return (
        <div>
            <Hybutton ref={bu} />
            <button onClick={e => bu.current.focus()}>ccc</button>
        </div>
    )
}

