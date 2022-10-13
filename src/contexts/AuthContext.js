// create context
import {createContext, useEffect, useState} from "react";
import {Auth} from "aws-amplify";

const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(null);
    const [dbUser, setDbUser] = useState(null);

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setAuthUser);
        console.log('authUser', authUser);
    }, []);

    return (
        <AuthContext.Provider value={{
            authUser,
            dbUser,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
