

import './Menu.css';

const Menu = () => {

  return (
    <>
      <div className="menu-container">
        <ul className="menu__list">
          <li className="menu__item item__dashboard">
            <a className='item__link' href="#"/>
          </li>
          <li className="menu__item item__megabot" >
            <a className='item__link' href="#"></a>
          </li>
          <li className="menu__item item__botmarket">
            <a className='item__link' href="#"></a>
          </li>
          <li className="menu__item  item__coinprices">
            <a className='item__link' href="#"></a>
          </li>
          <li className="menu__item item__profile">
            <a className='item__link' href="#"></a>
          </li>
        </ul>
      </div>
    </>
  )
};

export default Menu;