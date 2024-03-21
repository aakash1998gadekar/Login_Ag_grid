import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

export type User = {
    name:string
    password:string
}

export interface LoginContextInterface {
    user:User,
    setUser: Dispatch<SetStateAction<User>>
}


const defaultUserState = {
    user:{
        name:"",
        password:""
    },
    setUser:()=> {}
} as LoginContextInterface

export const LoginContext = createContext(defaultUserState)

type UserProvideProps = {
    children: ReactNode
}

export const LoginContextProvider = ({children}:UserProvideProps) => {
    const [user,setUser] = useState<User>({
        name:'',
        password:''
    })

    return (
        <LoginContext.Provider value={{user,setUser}}>
            {children}
        </LoginContext.Provider>
    )
}