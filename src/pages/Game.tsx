import { useState } from 'react';
import { motion } from 'framer-motion';
import { GameProvider } from '../contexts/GameProvider';
import { pageTransition, pageVariants } from '../App';
import { PlayerMark } from '../types';
import Counter from '../components/Counter';
import Board from '../components/Board';
import WinningScreen from '../components/WinningScreen';

const Game: React.FC = () => {
  const [endGame, setEndGame] = useState(false);

  return (
    <GameProvider>
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ position: 'absolute' }}
        className="game w-screen h-screen flex flex-col justify-center items-center bg-black"
      >
        <Counter classes="fixed top-0 left-0" sign={PlayerMark.X} />
        <Counter classes="fixed bottom-0 right-0" sign={PlayerMark.Circle} />

        <Board setEndGame={setEndGame} />

        {endGame ? <WinningScreen setEndGame={setEndGame} /> : null}
      </motion.div>
    </GameProvider>
  );
};

export default Game;
