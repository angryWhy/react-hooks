import React,{useState}from 'react'

export default function Demo() {
    const [count, setCount] = useState(0);  
    const [age, setAge] = useState(18);
    const [friends, setFriends] = useState(["lili","lisi"]);
    return (
        <div>
            <h2>{count}</h2>
            <h2>{age}</h2>
            <ul>
                {friends.map((item,index)=><li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}
