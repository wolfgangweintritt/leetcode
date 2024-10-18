function isValidSudoku(board) {
    return validRows(board) && validCols(board) && validCells(board);
}
;
// 9x9: array ~ object > map 
// if it was a 1000x1000 sudoku: obj > array >>>>>>> map
function validRows(board) {
    for (let i = 0; i < board.length; i++) {
        if (!validRow(board[i])) {
            return false;
        }
    }
    return true;
}
function validRow(row) {
    const cacheArr = [];
    for (let i = 0; i < row.length; i++) {
        const val = row[i];
        if (val === '.') {
            continue;
        }
        if ((cacheArr[val] ?? -1) === val) {
            return false;
        }
        cacheArr[val] = val;
    }
    return true;
}
function validCols(board) {
    for (let i = 0; i < board.length; i++) {
        if (!validCol(board, i)) {
            return false;
        }
    }
    return true;
}
function validCol(board, colId) {
    const cacheArr = [];
    for (let i = 0; i < board.length; i++) {
        const val = board[i][colId];
        if (val === '.') {
            continue;
        }
        if ((cacheArr[val] ?? -1) === val) {
            return false;
        }
        cacheArr[val] = val;
    }
    return true;
}
function validCells(board) {
    for (let x = 0; x < board.length; x += 3) {
        for (let y = 0; y < board.length; y += 3) {
            if (!validCell(board, x, y)) {
                return false;
            }
        }
    }
    return true;
}
function validCell(board, x, y) {
    const cacheArr = [];
    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            const val = board[i][j];
            if (val === '.') {
                continue;
            }
            if ((cacheArr[val] ?? -1) === val) {
                return false;
            }
            cacheArr[val] = val;
        }
    }
    return true;
}
const b = [["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(b));
const b2 = [["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];
console.log(isValidSudoku(b2));
export {};
