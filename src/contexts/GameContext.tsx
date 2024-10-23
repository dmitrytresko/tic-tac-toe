import { createContext, Dispatch, SetStateAction } from 'react';
import { BoardCell, PlayerMark } from '../types';

interface IGameContext {
  cells: BoardCell[];
  setCells: Dispatch<SetStateAction<BoardCell[]>>;
  isXTurn: boolean;
  setIsXTurn: Dispatch<SetStateAction<boolean>>;
  currentTurn: PlayerMark | null;
  isDraw: boolean;
  setIsDraw: Dispatch<SetStateAction<boolean>>;
  xWinsCounter: number;
  setXWinsCounter: Dispatch<SetStateAction<number>>;
  circleWinsCounter: number;
  setCircleWinsCounter: Dispatch<SetStateAction<number>>;
}

const initialGameContext: IGameContext = {
  cells: [],
  setCells: () => {},
  isXTurn: true,
  setIsXTurn: () => {},
  currentTurn: null,
  isDraw: false,
  setIsDraw: () => {},
  xWinsCounter: 0,
  setXWinsCounter: () => {},
  circleWinsCounter: 0,
  setCircleWinsCounter: () => {},
};

export const GameContext = createContext<IGameContext>(initialGameContext);
