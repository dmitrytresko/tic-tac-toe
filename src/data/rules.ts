import { GameRule } from '../types';

export const RULES: GameRule[] = [
  {
    order: 1,
    name: 'Select Sides',
    description:
      'Players must select their mark before the game starts (either X or O) and must play the entire game using the same mark.',
  },
  {
    order: 2,
    name: 'Switch Turns',
    description: 'Players must take turns, making only 1 mark with each turn.',
  },
  {
    order: 3,
    name: 'Place a Mark',
    description:
      'Marks can only be placed in empty squares, and once it is placed, it is permanent.',
  },
  {
    order: 4,
    name: 'Who Wins',
    description:
      'The winner is the first player to get 3 of their marks in a straight line (the line can be positioned diagonally, vertically, or horizontally).',
  },
  {
    order: 5,
    name: 'Game Over',
    description:
      'The game is over when all 9 squares are filled with marks, even if none of the players have a straight line of 3 marks.',
  },
  {
    order: 6,
    name: 'Draw',
    description:
      'If neither player has a straight line of 3 marks, it is considered a draw.',
  },
];
