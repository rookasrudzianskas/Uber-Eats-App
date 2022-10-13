// create Basket context
import {createContext, useContext} from 'react';

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

export const useBasketContext = () => {
    return useContext(BasketContext);
}
