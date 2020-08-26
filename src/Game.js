import React from 'react';
import './Game.css';

const CELL_SIZE = 10;
const WIDTH = 800;
const HEIGHT = 600;

export class Game extends React.Component {
  constructor() {
    super();
    this.rows = HEIGHT / CELL_SIZE;
    this.cols = WIDTH / CELL_SIZE;
    this.board = this.makeEmptyBoard();

    this.state = {
      cells: [],
      interval: 100,
      isRunning: false,

    };
  }

  runGame = () => {
    this.setState({ isRunning: true });
  };

  stopGame = () => {
    this.setState({ isRunning: false});
  };

  makeEmptyBoard() {
    let board = [];
    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }
    return board;
  }

  makeCells() {
    let cells = [];
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y });
        }
      }
    }
  }

  handleInterval = (e) => {
    this.setState({ interval: e.target.value });
  };

  getElementOffset() {

  }

  handleClick = (event) => {
    const elemOffset = this.getElementOffset();
  };

  render() {
    return (
      <div>
        <div className = "Board"
          style = {{
            width: WIDTH,
            height: HEIGHT,
            backgroundSize: `${CELL_SIZE} px ${CELL_SIZE}px`,
          }}
          onClick = {this.handleClick()}
        ></div>
      </div>
    );
  }
}

export default Game
