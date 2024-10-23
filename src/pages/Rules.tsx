import { motion } from 'framer-motion';
import { pageTransition, pageVariants } from '../App';
import { RULES } from '../data/rules';
import RuleCard from '../components/RuleCard';

const Rules: React.FC = () => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    style={{ position: 'absolute' }}
    className="w-screen h-screen flex flex-col items-center p-12"
  >
    <h1 className="text-white font-bold text-[2.5rem] text-center">
      The rules of a classic <span className="text-[#00C782]">Tic Tac Toe</span> game
    </h1>
    <div className="w-16 h-2 mt-12 mb-12 bg-[#1D976C] rounded-full"></div>
    <p className="max-w-3xl mb-20 text-white font-bold text-lg text-center">
      When playing Tic Tac Toe, there are several simple and easy-to-follow rules that you
      should observe. <span className="text-[#00C782]">The rules</span> that you need to
      be aware of <span className="text-[#00C782]">include the following</span>:
    </p>

    <ul className="max-w-screen-xl list-none grid grid-cols-3 gap-12">
      {RULES.map(({ order, name, description }) => (
        <RuleCard order={order} name={name} description={description} />
      ))}
    </ul>
  </motion.div>
);

export default Rules;
