import { useState } from "react"
import React from 'react'

export default function Demo() {
    //hook：usestate
    //是一个函数，来自react包
    //参数和返回值
    //给创建出来的状态一个默认值
    const arr=useState(0);
    const state=arr[0];
    const setState=arr[1];
    //返回的是一个数组
     
    return (
        <div>
            <h2>计数器：{state}</h2>
            <button onClick={e=>setState(state+1)}>+1</button>
            <button onClick={e=>setState(state-1)}>-1</button>
        </div>
    )
}
