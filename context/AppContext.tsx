'use client'

import { useRouter, useRouter as UseRouterType } from "next/navigation";
import { createContext, useContext, ReactNode, useState } from "react";
import toast from "react-hot-toast";

// Define the context type

interface AppContextType {
    router: ReturnType<typeof useRouter>;
    products: Product[];
    addToCart: (drink: Drink) => void;
    getCartCount: () => number;
    cartItems:  Drink[];
    setCartItems: React.Dispatch<React.SetStateAction<Drink[]>>;
}

interface AppContextProviderProps {
    children: ReactNode;
}

export interface Drink {
    _id: string;
    option: string;
    addon: string[];
    request: string;
    quantity: number;
}

export interface Product {
    _id: string;
    price: number;
    image: string;
    description: string;
    option: string[];
    addon: string[];
}

// Function

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    
    const router = useRouter();

    const [products, setProducts] = useState<Product[]>([]);
    const [userData, setUserData] = useState(false);
    const [cartItems, setCartItems] = useState<Drink[]>([]);

    const addToCart = (drink: Drink) => { 

        setCartItems(prev => {
            const found = prev.find(item =>
                item._id === drink._id &&
                item.option === drink.option &&
                JSON.stringify(item.addon) === JSON.stringify(drink.addon) &&
                item.request === drink.request
            );
            if (found) {
                return prev.map(item => item === found ? { ...item, quantity: item.quantity + drink.quantity } : item);
            } else {
                return [...prev, drink];
            }
        });
    
        toast.success('เพิ่มลงตะกร้าสำเร็จ')
        console.log(cartItems)
    }

    const getCartCount = () => {

        let totalCount = 0;
        for (const item of cartItems) {
            totalCount += item.quantity;
        }

        return totalCount

    }

    const value: AppContextType = {
        router, products, 
        addToCart, getCartCount, cartItems, setCartItems
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}