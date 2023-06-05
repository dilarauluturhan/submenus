import React from 'react';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './context.js';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext(); // "useGlobalContext" özelliğinden "openSidebar", "openSubmenu" ve "closeSubmenu" özelliklerini alır.
  
  // displaySubmenu, fare üzerine gelindiğinde açılır menünün görüntülenmesini sağlar.
  const displaySubmenu = (e) => {
    const page = e.target.textContent; // Fare üzerine gelinen öğenin metnini page değişkenine atar. Bu, hangi menünün açılacağını belirlemek için kullanılır.
    const tempBtn = e.target.getBoundingClientRect(); // Fareyle üzerine gelinen öğenin pozisyonunu içeren bir dikdörtgenin bilgilerini "tempBtn" değişkenine atar.
    const center = (tempBtn.left + tempBtn.right) / 2; // Dikdörtgenin yatay merkezini hesaplar ve "center" değişkenine atar.
    const bottom = tempBtn.bottom - 3; // Dikdörtgenin alt kenarının biraz üstünde bir yükseklik değeri belirler ve "bottom" değişkenine atar.
    /*
    "openSubmenu" fonksiyonunu çağırarak açılır menüyü görüntüler.
    "page" parametresi olarak fare üzerine gelinen öğenin metni,
    ikinci parametre olarak ise açılır menünün konumunu içeren bir nesne geçirilir.
    */
    openSubmenu(page, { center, bottom });
  }

  // Bu fonksiyon, menü dışına tıklanıldığında açılır menünün gizlenmesini sağlar.
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu();
    }
  }

  return (
    <>
      <nav className='nav' onMouseOver={handleSubmenu}>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={logo} className='nav-logo' alt="stripe" />
            <button className='btn toggle-btn' onClick={openSidebar}>
              <FaBars />
            </button>
          </div>
          <ul className='nav-links'>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
            </li>
            <li>
              <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
            </li>
          </ul>
          <button className='btn signin-btn'>Sign in</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar;

/*
e.target.classList.contains() bir JavaScript DOM API'si olan classList özelliğinin bir yöntemidir. 
Bu yöntem belirtilen HTML öğesinin sınıf listesinde belirli bir sınıfın olup olmadığını kontrol etmek için kullanılır.
e.target olayın hedef öğesini temsil eder. 
Örneğin bir olay dinleyici tarafından tetiklenen bir fare etkinliğinde e.target fare üzerine gelinen HTML öğesini temsil eder.
classList özelliği, bir HTML öğesinin sınıf listesine erişmek ve bu liste üzerinde işlemler yapmak için kullanılır.
classList özelliği üzerinde bir dizi yöntem bulunur ve contains() yöntemi bu yöntemlerden biridir.
contains() yöntemi, bir sınıf adını parametre olarak alır ve sınıf listesinde belirtilen sınıfın bulunup bulunmadığını kontrol eder. 
Eğer sınıf listesinde belirtilen sınıf varsa true döndürür, aksi takdirde false döndürür.
*/