import { useState } from 'react';
import { BotProps } from '../../App';
import './BotsList.css';

interface BotsListProps {
  bots: BotProps[];
  getRandomDataCurrency: () => void;
  value: '24h' | '7d' | '30d' | 'all_time';
}

const BotsList = ({ bots, getRandomDataCurrency, value }: BotsListProps) => {
  const [selectedBotId, setSelectedBotId] = useState<number | undefined>(undefined);

  const botsName = [
    { id: 0, botName: 'orange_bot', name: 'Attack' },
    { id: 1, botName: 'none_bot', name: 'place bot here' },
    { id: 2, botName: 'blue_bot', name: 'balance' },
    { id: 3, botName: 'green_bot', name: 'defence' },
    { id: 4, botName: 'yellow_bot', name: 'Megabot' },
    { id: 5, botName: 'red_bot', name: 'Attack' },
  ];

  const combineBots = botsName.map((botName) => {
    const com = bots.find((bot) => bot.name === botName.botName);
    return { ...com, ...botName };
  });
  
  return (
    <>
      <div className="bots__list_container">
        <ul className="bots__list">
          {combineBots.map((bot) => (
            <li
              key={bot.id}
              onClick={() => {
                if (bot.botName !== 'none_bot') {
                  getRandomDataCurrency();
                  setSelectedBotId(bot.id);
                }
              }}
              className={bot.botName === 'none_bot' ? 'disabled' : ''}
            >
              <label
                className={
                  selectedBotId === bot.id && bot.botName !== 'none_bot'
                    ? 'bots__item bot__active'
                    : 'bots__item'
                }
                htmlFor={bot.botName}
              >
                <input
                  type="radio"
                  className="bots__input"
                  name={bot.botName}
                  id={bot.botName}
                  disabled={bot.botName === 'none_bot'} 
                />
                <div className={`bot__image ${bot.botName}`}></div>
                <span
                  className={
                    bot.botName !== 'none_bot'
                      ? 'bots__name'
                      : 'bots__name bots__name--disabled'
                  }
                >
                  {bot.name.toUpperCase()}
                </span>
                {bot.botName !== 'none_bot' && (
                  <span className={Number(bot[value])> 0 ? "bots__status positive" : "bots__status negative"}>
                    {bot[value] ? `${bot[value]}%` : 'N/A'}
                  </span>
                )}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default BotsList;