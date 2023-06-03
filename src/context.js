import React, { useState, useContext } from 'react';
import sublinks from './data';

/*
React.createContext(), React uygulamalarında verilerin paylaşılmasını sağlayan bir Context nesnesi oluşturur.
Bu Context nesnesi, verileri üreten ve tüketen bileşenler arasında iletişim kurmayı kolaylaştırır.
*/
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);

    /*
    openSidebar fonksiyonu, setIsSidebarOpen fonksiyonunu çağırarak isSidebarOpen durum değişkenini true olarak günceller.
    */
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    /*
    closeSidebar fonksiyonu, setIsSidebarOpen fonksiyonunu çağırarak isSidebarOpen durum değişkenini false olarak günceller.
    */
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    /*
    openSubmenu fonksiyonu, setIsSubmenuOpen fonksiyonunu çağırarak isSubmenuOpen durum değişkenini true olarak günceller.
    */
    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    };

    /*
    closeSubmenu fonksiyonu, setIsSubmenuOpen fonksiyonunu çağırarak isSubmenuOpen durum değişkenini false olarak günceller.
    */
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <>
        {/*
        AppContext, bir bileşen ağacının belirli bir yerindeki component'lar arasında veri paylaşımını sağlamak için kullanılır.
        Provider bileşeni, bu Context nesnesini kullanarak paylaşılacak verileri sağlar. 
        */}
            <AppContext.Provider
            value={{
                isSubmenuOpen,
                isSidebarOpen,
                openSubmenu,
                openSidebar,
                closeSubmenu,
                closeSidebar
            }}
            >
                {/* Veriye erişilebilen bileşenler */}
                {children}
            </AppContext.Provider>
        </>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}