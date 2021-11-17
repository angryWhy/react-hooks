import React, { createContext, PureComponent} from 'react'
// import Epp from"./components/05-useCallback/useCallback不优化"
export const UserContext=createContext();
export const ProfileContext=createContext();
export default class App extends PureComponent {
  constructor(){
    super();
    this.state={
      show:true
    }
  }

  render() {
    return (
      <div>
      <UserContext.Provider value={{name:"string",age:18}}>
        <ProfileContext.Provider value={{name:"123",age:20}}>
      {/* <Epp/> */}
      </ProfileContext.Provider >
      </UserContext.Provider>
      </div>
    )
  }
}
