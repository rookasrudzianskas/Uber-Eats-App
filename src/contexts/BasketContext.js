// create Basket context
import {createContext, useContext} from 'react';

const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {
    const addDishToBasket = (dish, quantity) => {

    }

    return (
        <BasketContext.Provider value={{
            addDishToBasket,
        }}>
        {children}
        </BasketContext.Provider>
    );
}


export default BasketContextProvider;

export const useBasketContext = () => {
    return useContext(BasketContext);
}
