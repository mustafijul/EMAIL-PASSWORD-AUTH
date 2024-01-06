import React, { Children, createContext, useContext } from 'react';

export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {

    const user = {displayName: 'tamim'}

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;