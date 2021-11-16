import React,{useState}from 'react'
export default function App() {
    const [freiends, setFreiends] = useState([{
        id:1,name:"lili",age:18
    },{
        id:2,name:"zhaosi",age:19
    },{
        id:3,name:"danny",age:20
    }])
    function btnClick(index){
        const newFriends=[...freiends];
        newFriends[index].age+=1;
        setFreiends(newFriends);
    }
    return (
        <div>
            <ul>
                {freiends.map((item,index)=><li key={item.id}>
                    <span>{item.id}</span>
                    <span>{item.name}</span>
                    <span onClick={e=>btnClick(index)}>{item.age}</span>
                </li>)}
            </ul>
        </div>
    )
}
