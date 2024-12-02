import React, { useEffect, useContext, useState, createContext } from "react";

const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
    //multiplicador do tamanho de fonte, o valor padrao e 1
    const [fontSize, setFontSize] = useState(1);

    useEffect(() => {
        //recuperando o valor armazenado de tamanho da fonte
        const savedFontSize = localStorage.getItem("fontSize") || 1;
        setFontSize(savedFontSize);

        const handleStorageChange = (event) => {
            if (event.key === "fontSize") {
                setFontSize(event.newValue || 1);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const toggleFontSize = (newFontSize) => {
        console.log("Font Size :" + fontSize + "x");
        if(newFontSize > 0 && newFontSize < 6){
            setFontSize(newFontSize);
            console.log("New Font Size :" + fontSize + "x");
        }else{
            console.log("Limite de fonte atingido!" + fontSize + "x");
        }
        localStorage.setItem("fontSize", newFontSize);
    };

    return (
        <FontSizeContext.Provider value={{ fontSize, toggleFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
};

export const useFontSize = () => {
    const context = useContext(FontSizeContext);
    if (!context) {
        throw new Error("useFontSize must be used within a FontSizeProvider");
    }
    return context;
};
