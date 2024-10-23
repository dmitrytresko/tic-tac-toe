import { useCallback, useContext } from 'react';
import { GameContext } from '../../contexts/GameContext';
import { PlayerMark } from '../../types';
import './styles.css';

type BoardCellProps = {
  position: number;
  content: PlayerMark | null;
};

const BoardCell: React.FC<BoardCellProps> = ({ position, content }) => {
  const { cells, setCells, currentTurn } = useContext(GameContext);

  const selectCell = useCallback(() => {
    const updatedCells = cells.map((cell) => {
      if (cell.id === position) {
        return { ...cell, content: currentTurn };
      }

      return cell;
    });

    setCells(updatedCells);
  }, [cells, currentTurn, position, setCells]);

  return (
    <div
      className={`${content} board-cell w-28 h-28 flex justify-center items-center bg-transparent border-2 border-white text-white cursor-pointer`}
      onClick={selectCell}
    />
  );
};

export default BoardCell;
