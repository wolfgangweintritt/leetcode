// make memo reusable => index = what is left to the end
let memo = {};
function uniquePaths(m, n) {
    // divide and conquer?
    // memoization?
    memo = {};
    return uniquePathsFromPosition(1, 1, m, n);
}
;
function uniquePathsFromPosition(x, y, m, n) {
    const memoKey = `${m - x}-${n - y}`;
    if (memo[memoKey] !== undefined) {
        return memo[memoKey];
    }
    if (x === m && y === n) {
        return 1;
    }
    let goRight = 0;
    if (x < m) {
        goRight = memo[`${m - x - 1}-${n - y}`] = uniquePathsFromPosition(x + 1, y, m, n);
    }
    let goDown = 0;
    if (y < n) {
        goDown = memo[`${m - x}-${n - y - 1}`] = uniquePathsFromPosition(x, y + 1, m, n);
    }
    return goRight + goDown;
}
export {};
