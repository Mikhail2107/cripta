
import ButtonBurger from '../../share/ButtonBurger/ButtonBurger';
import './Header.css';

type FuncProps = {
  getRandomDataCurrency: () => void;
};
const Header = ({getRandomDataCurrency}: FuncProps) => {

  return (
    <>
      <ul className="header__menu">
        <li className="header__item header__burger">
          <ButtonBurger />
        </li>
        <li className="header__item header__title">
          Dashboard
        </li>
        <li className="header__item header__refresh">
          <button className="button__refresh" 
                  onClick={getRandomDataCurrency}></button>
        </li>
      </ul>
    </>
  )
};

export default Header;