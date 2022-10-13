// create context
import {createContext, useContext, useEffect, useState} from "react";
import {Auth} from "aws-amplify";

const AuthContext = createContext({});

const AuthContextProvider = ({children}) => {
    const [authUser, setAuthUser] = useState(null);
    const [dbUser, setDbUser] = useState(null);

    useEffect(() => {
        Auth.currentAuthenticatedUser({bypassCache: true}).then(setAuthUser);
    }, []);
        // console.log('authUser', authUser);
    const sub = authUser?.attributes?.sub;

    return (
        <AuthContext.Provider value={{
            authUser,
            dbUser,
            sub,
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;

export const useAuthContext = () => {
    return useContext(AuthContext);
}
