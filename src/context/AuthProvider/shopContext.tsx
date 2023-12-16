import { createContext, useState } from "react";
import { IAuthProvider } from "./types";
import { getCartLocalStorage, setCartLocalStorage } from "./util";

export const ShopContext = createContext(null);

export const ShopProvider = (props: IAuthProvider) => {
    const [cartItems, setCartItems] = useState(()=> {
        const cart = getCartLocalStorage();
        return cart ?? [];
    });

    const addToCart = (item: any) => {
        const newCart = [...cartItems, item];
        setCartItems(newCart);
        setCartLocalStorage(newCart);
    };

    return (
        <ShopContext.Provider value={null}>
            {props.children}
        </ShopContext.Provider>
    );
};

