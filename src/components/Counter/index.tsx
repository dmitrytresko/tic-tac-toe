import { useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { PlayerMark } from '../../types';
import './styles.css';

type CounterProps = {
  classes: string;
  sign: string;
};

const Counter: React.FC<CounterProps> = ({ classes, sign }: CounterProps) => {
  const { xWinsCounter, circleWinsCounter } = useContext(GameContext);

  return (
    <div className={`${classes} p-8 bg-transparent flex items-center`}>
      <div className={`counter ${sign}`}></div>
      <div className="w-1 h-9 ml-5 mr-5 bg-white"></div>
      <div
        className={`${
          sign === PlayerMark.X ? 'text-white' : 'text-[#00C782]'
        }  text-5xl font-bold`}
      >
        {sign === PlayerMark.X ? xWinsCounter : circleWinsCounter}
      </div>
    </div>
  );
};

export default Counter;
