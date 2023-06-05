import React, { useState, useContext } from 'react';
import sublinks from './data';

// React.createContext(): componentler arasında veri paylaşımını sağlar.
const AppContext = React.createContext();

/*
AppProvider adında bir fonksiyonel bileşen oluşturuyoruz.
Bu bileşen tüm uygulama için global context sağlayacak.
*/
export const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: '', links: [] });

    // Bu fonksiyon, setIsSidebarOpen'ı çağırarak isSidebarOpen state'ini true yapar.
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    // Bu fonksiyon, setIsSidebarOpen'ı çağırarak isSidebarOpen state'ini false yapar.
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    /*
     Bu fonksiyon, alt menüyü açmak için kullanılır.
     İlgili alt menü verilerini sublinks dizisinden alır ve ilgili state'leri günceller.
    */
    const openSubmenu = (text, coordinates) => {
        /*
         "sublinks" dizisini tarayarak "text" değerine sahip olan alt menüyü bulur.
         "sublinks" dizisi alt menülerin verilerini içerir.
        */
        const page = sublinks.find((link) => link.page === text);
        /*
        "page" değişkenini "setPage" fonksiyonuyla "page" state'ine atar.
        Bu açılacak olan alt menünün verilerini içerir.
        */
        setPage(page);
        /*
        "coordinates" değerini "setLocation" fonksiyonuyla "location" state'ine atar. 
        Bu alt menünün açılacağı konumu temsil eder.
        */
        setLocation(coordinates);
        /*
        "setIsSubmenuOpen" fonksiyonu çağrılarak "isSubmenuOpen" state'i true olarak ayarlanır.
        Bu alt menünün görünür hale gelmesini sağlar.
        */
        setIsSubmenuOpen(true);
    };

    // Bu fonksiyon, setIsSubmenuOpen'ı çağırarak isSubmenuOpen state'ini false yapar.
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

    return (
        <>
            {/*
        AppContext.Provider, context değerlerini sağlamak için kullanılır.
        "value" prop'u, paylaşılan değerleri içeren bir nesne alır.
        */}
            <AppContext.Provider
                value={{
                    isSubmenuOpen,
                    isSidebarOpen,
                    openSubmenu,
                    openSidebar,
                    closeSubmenu,
                    closeSidebar,
                    location,
                    page
                }}
            >
                {/*
                AppProvider bileşeninin içerisine geçirilen diğer bileşenleri (children) render eder.
                */}
                {children}
            </AppContext.Provider>
        </>
    )
}

// Bu fonksiyon, useContext hook'unu kullanarak AppContext'i döndürür.
export const useGlobalContext = () => {
    return useContext(AppContext)
}