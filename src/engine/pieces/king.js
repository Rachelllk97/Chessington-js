import Piece from './piece';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        const kingMoves = [];
        let location = board.findPiece(this);
        let square = Square.at(row, col);
        
        let directions = [
            [-1, -1], [-1, 0], [-1, 1] // up+left, up, up+right
            [0, -1], [0, 1] // left, right
            [1, -1], [1, 0], [1, 1] // down+left, down, down_right
        ];

        for (let i = 0; i <directions.length; i++) {
            let row = location.row + directions[i][0];
            let col = location.col + directions[i][1];
        }


    }
}