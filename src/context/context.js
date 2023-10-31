import React, {createContext, useState} from 'react';

export const Context = createContext({});

function ContextProvider({ children }) {

    const [dutch, setDutch] = useState(true);

    function setLanguage() {
        setDutch(!dutch);
    }

    const contextValue = {
        dutch,
        setLanguage,
    };

    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    );
}

export default ContextProvider;