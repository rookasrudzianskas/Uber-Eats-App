// create Order context
import { createContext } from 'react';

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    return (
        <OrderContext.Provider value={{

        }}>
            {children}
        </OrderContext.Provider>
    );
}
