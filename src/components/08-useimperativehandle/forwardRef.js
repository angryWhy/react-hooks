import React,{useRef,forwardRef} from 'react'
const Hybutton=forwardRef((props,ref)=><input type="text" ref={ref}/>)
export default function ForwardRef() {
    const bu=useRef();
    return (
        <div>
            <Hybutton ref={bu}/>
            <button onClick={e=>bu.current.focus()}>ccc</button>
        </div>
    )
}
