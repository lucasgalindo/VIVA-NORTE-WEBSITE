import { createContext, useState } from "react";


export const LoginContext = createContext(null);


export default function ProviderLoginContext({ children }) {
    const DEFAULT = {
        name: "Anthony Thiago",
        picture: "http://res.cloudinary.com/dnnhfgiu5/image/upload/v1705426966/sdi3wmekdmqw9yiptlpc.png",
        connected: false,
        created: false,
        favorites: [],

    }
    const [credentials, setCredentials] = useState(DEFAULT);
    return (
        <LoginContext.Provider value={{ credentials, setCredentials }}>
            {children}
        </LoginContext.Provider>
    )
}