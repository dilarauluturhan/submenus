import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context.js';

const Submenu = () => {
    // "isSubmenuOpen" alt menünün açık olup olmadığını belirten bir değişken olarak tanımlanır.
    // "location" alt menünün konumunu belirten bir nesne olarak tanımlanır.
    // "page" içindeki { page, links }, alt menünün sayfasını ve bağlantılarını temsil eder.
    const { isSubmenuOpen, location, page: { page, links } } = useGlobalContext();
    // "container" adında bir referans oluşturulur ve alt menünün kontrol edilmesi için kullanılır.
    const container = useRef(null);
    // "columns" başlangıçta 'col-2' değerini alacak bir durum olarak tanımlanır.
    const [columns, setColumns] = useState('col-2')

    useEffect(() => {
        setColumns('col-2');
        const submenu = container.current; // alt menü elemanı referans alınır
        const { center, bottom } = location; // location nesnesinden center ve bottom değerleri alınır ve alt menünün konumunu belirlemek için kullanılır
        submenu.style.left = `${center}px`; // yatay pozisyon
        submenu.style.top = `${bottom}px`; // dikey pozisyon

        // bağlantıların uzunluğuna bağlı olarak "columns" durumu güncellenir
        if (links.length === 3) {
            setColumns('col-3')
        }
        if (links.length > 3) {
            setColumns('col-4')
        }
    }, [location, links])
    return (
        <aside className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`} ref={container}>
            <h4>{page}</h4>
            <div className={`submenu-center ${columns}`}>
                {links.map((link, index) => {
                    const { label, icon, url } = link
                    return <a key={index} href={url}>
                        {icon}
                        {label}
                    </a>
                })}
            </div>
        </aside>
    )
}

export default Submenu;