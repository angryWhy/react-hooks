import React,{useEffect} from 'react'

export default function Custom() {
    return (
        <div>
            
        </div>
    )
}
function useHooks() {
    useEffect(() => {
        console.log("组件被创建");
        return () => {
            console.log("组件被销毁");
        }
    }, [])
}
