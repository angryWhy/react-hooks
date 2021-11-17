import React ,{useContext}from 'react'
import { UserContext,ProfileContext } from '../App'
export default function Context() {
    const User=useContext(UserContext);
    const Profile=useContext(ProfileContext);
    return (
        <div>
        </div>
    )
}
