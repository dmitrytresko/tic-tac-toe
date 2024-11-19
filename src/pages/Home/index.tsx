import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageTransition, pageVariants } from '../../App';
import Button from '../../components/Button';
import './styles.css';

const ticTacToeLogo = new URL('../../assets/img/tic-tac-toe-logo.png', import.meta.url)
  .href;

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

      <div className="flex flex-col gap-4">
        <Button onClick={goToNewGame}>New Game</Button>
        <Button variant="outlined" onClick={goToRules}>
          Rules
        </Button>
      </div>
    </motion.div>
  );
};

export default Home;
