'use client'

import axios from "axios";
import { useRouter, useRouter as UseRouterType } from "next/navigation";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import toast from "react-hot-toast";

// Define the context type

interface AppContextType {
    router: ReturnType<typeof useRouter>;
    products: Product[];
    login: Login;
    setLogin: React.Dispatch<React.SetStateAction<Login>>;
    showLogin: boolean;
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
    addToCart: (drink: Drink) => void;
    getCartCount: () => number;
    cartItems:  Drink[];
    setCartItems: React.Dispatch<React.SetStateAction<Drink[]>>;
    adminToken: string;
    setAdminToken: React.Dispatch<React.SetStateAction<string>>;
}

interface AppContextProviderProps {
    children: ReactNode;
}

export interface Login {
    seat: string;
    round: string;
}

export interface Product {
    _id: string;
    price: number;
    image: string;
    description: string;
    option: string[];
    addon: string[];
}
export interface Drink {
    _id: string;
    option: string;
    selectedTime: string;
    addon: string[];
    request: string;
    quantity: number;
}

export interface Order {
    _id: string;
    seat: string;
    round: string;
    drink: Drink[];
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

    const [adminToken, setAdminToken] = useState<string>('');
    const [login, setLogin] = useState<Login>({seat: 'guess', round: 'กรอกที่นั่ง'});
    const [showLogin, setShowLogin] = useState<boolean>(true);
    const [products, setProducts] = useState<Product[]>([]);
    const [cartItems, setCartItems] = useState<Drink[]>([]);
    const [orderItems, setOrderItems] = useState<Order[]>([]);

    // Admin Token
    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (token) {
            setAdminToken(token);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('adminToken', adminToken);
    }, [adminToken]);

    // Fetch Data

    const fetchProductData = async () => {

    }

    const fetchUserData = async () => {

        try {

            const response = await axios.post('/api/cart/get', { seat: login.seat, round: login.round });

            if (response.data.success) {
              
                const { cartData, orderData } = response.data;
                setCartItems(cartData)
                setOrderItems(orderData)

            }
            
        } catch (error: any) {
            console.log(error)
            toast.error(error.message)
        }

    }

    // Cart Function

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
        router, products, adminToken, setAdminToken,
        login, setLogin, showLogin, setShowLogin,
        addToCart, getCartCount, cartItems, setCartItems
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}