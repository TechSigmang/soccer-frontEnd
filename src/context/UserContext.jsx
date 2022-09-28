import { Children, createContext, useState } from 'react'

const UserContext = createContext()


export const UserProfider = ({children}) =>{
    const [user, setUser] = useState([
        {
            id:1,
            FirstName:"Oladele",
            LastName:"Adewale",
            Age:34
        },
        {
            id:2,
            FirstName:"Rofiat",
            LastName:"Damilola",
            Age:23
        },
        {
            id:3,
            FirtName:"Rofial",
            LastName:"Olawumi",
            Age:27
        }
    ])

    return <UserContext.Provider value={{
        user,
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext;