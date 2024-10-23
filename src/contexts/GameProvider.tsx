import { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { initialCells } from '../data/cells';
import { GameContext } from './GameContext';
import { PlayerMark } from '../types';

export const GameProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cells, setCells] = useState(initialCells);
  const [isXTurn, setIsXTurn] = useState(true);
  const [currentTurn, setCurrentTurn] = useState<PlayerMark | null>(null);
  const [isDraw, setIsDraw] = useState(false);
  const [xWinsCounter, setXWinsCounter] = useState(0);
  const [circleWinsCounter, setCircleWinsCounter] = useState(0);

  useEffect(() => {
    setCurrentTurn(isXTurn ? PlayerMark.X : PlayerMark.Circle);
  }, [isXTurn]);

  const value = useMemo(
    () => ({
      cells,
      setCells,
      isXTurn,
      setIsXTurn,
      currentTurn,
      isDraw,
      setIsDraw,
      xWinsCounter,
      setXWinsCounter,
      circleWinsCounter,
      setCircleWinsCounter,
    }),
    [cells, circleWinsCounter, currentTurn, isDraw, isXTurn, xWinsCounter]
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
};
