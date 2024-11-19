import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { pageTransition, pageVariants } from '../App';
import Button from '../components/Button';

const notFoundImg = new URL('../assets/img/not-found.png', import.meta.url).href;

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
      <img src={notFoundImg} alt="Not Found" />
      <h1 className="text-[1.725rem] text-white font-bold mb-[9.5rem]">
        Oops. The page you are searching for doesn't exist.
      </h1>
      <Button onClick={goHome}>Home</Button>
    </motion.div>
  );
};

export default NotFound;
