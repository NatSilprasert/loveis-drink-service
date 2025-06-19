'use client'

import { useRouter, useRouter as UseRouterType } from "next/navigation";
import { createContext, useContext, ReactNode } from "react";

// Define the context type

interface AppContextType {
    router: ReturnType<typeof useRouter>;
}

interface AppContextProviderProps {
    children: ReactNode;
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

    const value: AppContextType = {
        router
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
}