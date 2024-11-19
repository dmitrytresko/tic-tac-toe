import { Dispatch, SetStateAction, useCallback, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GameContext } from '../../contexts/GameContext';
import { initialCells } from '../../data/cells';
import { pageVariants, pageTransition } from '../../App';
import Button from '../Button';
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

      <div className="flex flex-col gap-4">
        <Button onClick={restartGame}>Restart</Button>
        <Button variant="outlined" onClick={goHome}>
          Home
        </Button>
      </div>
    </motion.div>
  );
};

export default WinningScreen;
