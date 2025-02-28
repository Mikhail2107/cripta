
import './Wallet.css';
interface WalletProps {
  trading_capital: number;
  trading_capital_currency: string;
  balance: number;
  on_hold: number;
}
const Wallet = (data :WalletProps) => {

  return (

    <>
    <div className="wallet-container">
      <span className="wallet__title">
              Trading capital
      </span>
      <span className="wallet__total">{data.trading_capital}</span> 
      <span className="wallet_currency">{data.trading_capital_currency.toUpperCase()}</span> 
      <span className="wallet__balance_title">Balance</span>
      <span className="wallet__balance_total">{data.balance}</span>
      <span className="wallet__hold_title">on hold</span>
      <span className="wallet__hold_total">{data.on_hold}</span>
    </div>
      
    </>
  )
};

export default Wallet;