export enum PlayerMark {
  X = 'x',
  Circle = 'circle',
}

export type BoardCell = {
  id: number;
  content: PlayerMark | null;
};

export type GameRule = {
  order: number;
  name: string;
  description: string;
};
