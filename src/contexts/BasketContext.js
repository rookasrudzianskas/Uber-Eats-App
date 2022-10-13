// create Basket context
import { createContext } from 'react';

const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
    return (
        <BasketContext.Provider value={{

        }}>
        {children}
        </BasketContext.Provider>
    );
}


export default BasketContextProvider;
