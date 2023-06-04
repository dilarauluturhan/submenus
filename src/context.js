import React, { useState, useContext } from 'react';
import sublinks from './data';

/*
React.createContext(), React uygulamalarında verilerin paylaşılmasını sağlayan bir Context nesnesi oluşturur.
Bu Context nesnesi, verileri üreten ve tüketen bileşenler arasında iletişim kurmayı kolaylaştırır.
*/
const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({})

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
    const openSubmenu = (text, coordinates) => {
        setLocation(coordinates);
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
        value özelliği bağlamda paylaşmak istediğimiz değerleri belirtir.
        Bu değerler bağlamı kullanan alt bileşenler tarafından erişilebilir hale gelir.
        */}
            <AppContext.Provider
                value={{
                    isSubmenuOpen,
                    isSidebarOpen,
                    openSubmenu,
                    openSidebar,
                    closeSubmenu,
                    closeSidebar,
                    location
                }}
            >
                {/* Veriye erişilebilen bileşenler */}
                {children}
            </AppContext.Provider>
        </>
    )
}

/*
useGlobalContext adında bir özel bir hook oluşturdum. Bu hook useContext hook'unu kullanarak AppContext bağlamına erişim sağlar.
useGlobalContext hook'u çağrıldığında useContext(AppContext) ifadesi kullanılır 
ve AppContext bağlamının değerlerini döndürür.
Bu sayede, AppContext.Provider bileşeni tarafından sağlanan değerlere erişim sağlayan bileşenler, useGlobalContext hook'unu kullanarak bu değerlere kolayca erişebilirler.
*/
export const useGlobalContext = () => {
    return useContext(AppContext)
}