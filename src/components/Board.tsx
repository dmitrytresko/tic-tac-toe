import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { GameContext } from '../contexts/GameContext';
import { WINNING_COMBINATIONS } from '../data/constants';
import { PlayerMark } from '../types';
import { initialCells } from '../data/cells';
import BoardCell from './BoardCell';

type BoardProps = {
  setEndGame: Dispatch<SetStateAction<boolean>>;
};

const Board: React.FC<BoardProps> = ({ setEndGame }) => {
  const boardRef = useRef<HTMLDivElement>(null);
  const [, setWinningCombination] = useState<number[]>([]);

  const {
    cells,
    currentTurn,
    setIsXTurn,
    setIsDraw,
    setXWinsCounter,
    setCircleWinsCounter,
  } = useContext(GameContext);

  const determineWinningCombination = useCallback(() => {
    WINNING_COMBINATIONS.forEach((combination) => {
      if (combination.every((idx) => cells[idx].content === currentTurn)) {
        setWinningCombination(combination);
      }
    });
  }, [cells, currentTurn]);

  const endGame = useCallback(
    (isWinner: boolean) => {
      if (boardRef.current) {
        boardRef.current.style.pointerEvents = 'none';
      }

      if (isWinner) {
        currentTurn === PlayerMark.X
          ? setXWinsCounter((prevCount) => ++prevCount)
          : setCircleWinsCounter((prevCount) => ++prevCount);
      } else {
        setIsDraw(true);
      }

      determineWinningCombination();
      setTimeout(() => {
        setEndGame(true);
      }, 500);
    },
    [
      currentTurn,
      determineWinningCombination,
      setCircleWinsCounter,
      setEndGame,
      setIsDraw,
      setXWinsCounter,
    ]
  );

  const checkWin = useCallback(() => {
    return WINNING_COMBINATIONS.some((combination) =>
      combination.every((idx) => cells[idx].content === currentTurn)
    );
  }, [cells, currentTurn]);

  const checkDraw = useCallback(() => {
    return WINNING_COMBINATIONS.every((combination) =>
      combination.every((idx) => cells[idx].content)
    );
  }, [cells]);

  useEffect(() => {
    if (cells !== initialCells) {
      checkWin()
        ? endGame(true)
        : checkDraw()
          ? endGame(false)
          : setIsXTurn((prevState) => !prevState);
    }

    if (cells === initialCells && boardRef.current) {
      boardRef.current.style.pointerEvents = 'auto';
    }
  }, [cells]);

  return (
    <div
      className={`${currentTurn} board grid grid-cols-3 bg-transparent`}
      ref={boardRef}
    >
      {cells?.map((item) => (
        <BoardCell key={item.id} position={item.id} content={item.content} />
      ))}
    </div>
  );
};

export default Board;
