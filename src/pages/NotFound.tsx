import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageTransition, pageVariants } from '../App';
import notFoundError from '../assets/img/404-error.png';

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  const goHome = () => navigate('/');

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      style={{ position: 'absolute' }}
      className="w-screen h-screen flex flex-col justify-center items-center"
    >
      <img src={notFoundError} alt="Not Found" />
      <h1 className="text-[1.725rem] text-white font-bold mb-[9.5rem]">
        Oops. The page you are searching for doesn't exist.
      </h1>
      <button
        className="px-4 py-4 min-w-[20rem] rounded-full border-2 bg-[#00C782] border-[#00C782] text-white text-3xl font-bold hover:bg-[#1D976C] hover:border-[#1D976C] transition-all"
        onClick={goHome}
      >
        Home
      </button>
    </motion.div>
  );
};

export default NotFound;
