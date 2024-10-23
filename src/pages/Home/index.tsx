import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageTransition, pageVariants } from '../../App';
import ticTacToeLogo from '../../assets/img/tic-tac-toe-logo.png';
import './styles.css';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const goToNewGame = () => navigate('/game');
  const goToRules = () => navigate('/rules');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: 'absolute' }}
      className="w-screen h-screen py-24 flex flex-col justify-center items-center bg-black"
    >
      <img
        src={ticTacToeLogo}
        alt="Tic Tac Toe Logo"
        className="w-32 h-32 mb-12 rotate-[-45deg]"
      />

      <div className="inline-flex mb-28 brightness-200 bg-transparent overflow-hidden">
        <span className="title text-white text-center font-bold text-8xl uppercase tracking-[0.2rem] outline-none bg-black">
          Tic Tac Toe
        </span>
        <span className="title-gradient absolute top-0 left-0 w-full h-full mix-blend-multiply" />
        <span className="title-lights absolute top-[-100%] left-[-100%] right-0 bottom-0 mix-blend-color-dodge" />
      </div>

      <button
        className="px-4 py-4 min-w-[20rem] mb-4 rounded-full border-2 bg-[#00C782] border-[#00C782] text-white text-3xl font-bold hover:bg-[#1D976C] hover:border-[#1D976C] transition-all"
        onClick={goToNewGame}
      >
        New Game
      </button>
      <button
        className="px-4 py-4 min-w-[20rem] rounded-full border-2 border-white bg-transparent text-white text-3xl font-bold hover:bg-white hover:text-black transition-all"
        onClick={goToRules}
      >
        Rules
      </button>
    </motion.div>
  );
};

export default Home;
