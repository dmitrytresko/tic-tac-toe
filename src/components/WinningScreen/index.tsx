import { Dispatch, SetStateAction, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GameContext } from '../../contexts/GameContext';
import { initialCells } from '../../data/cells';
import { pageVariants, pageTransition } from '../../App';
import './styles.css';

type WinningScreenProps = {
  setEndGame: Dispatch<SetStateAction<boolean>>;
};

const WinningScreen: React.FC<WinningScreenProps> = ({ setEndGame }) => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  const { isXTurn, isDraw, currentTurn, setIsXTurn, setIsDraw, setCells } =
    useContext(GameContext);

  const restartGame = useCallback(() => {
    setIsXTurn(true);
    setIsDraw(false);
    setCells(initialCells);
    setEndGame(false);
  }, [setCells, setEndGame, setIsDraw, setIsXTurn]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: 'absolute' }}
      className="fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black"
    >
      <div className="flex flex-col items-center mr-24">
        <div className={`${isDraw ? 'draw' : currentTurn} message`}></div>
        <h1
          className={`${
            isXTurn || isDraw ? 'text-white' : 'text-[#00C782]'
          } mt-3 text-4xl leading-8 font-bold`}
        >
          {isDraw ? 'DRAW' : 'WINS!'}
        </h1>
      </div>

      <div className="flex flex-col">
        <button
          className="px-4 py-4 min-w-[20rem] mb-4 rounded-full border-2 bg-[#00C782] border-[#00C782] text-white text-3xl font-bold hover:bg-[#1D976C] hover:border-[#1D976C] transition-all"
          onClick={restartGame}
        >
          Restart
        </button>
        <button
          className="px-4 py-4 min-w-[20rem] rounded-full border-2 border-white bg-transparent text-white text-3xl font-bold hover:bg-white hover:text-black transition-all"
          onClick={goHome}
        >
          Home
        </button>
      </div>
    </motion.div>
  );
};

export default WinningScreen;
