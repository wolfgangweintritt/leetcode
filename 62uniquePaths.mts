// make memo reusable => index = what is left to the end
let memo: {[k: string]: number} = {};

function uniquePaths(m: number, n: number): number {
    // divide and conquer?
    // memoization?

    memo = {};
    return uniquePathsFromPosition(1, 1, m, n);
};

function uniquePathsFromPosition(x: number, y: number, m: number, n: number): number
{
    const memoKey: string = `${m - x}-${n - y}`;
    if (memo[memoKey] !== undefined) {
        return memo[memoKey];
    }

    if (x === m && y === n) {
        return 1;
    }

    let goRight: number = 0;
    if (x < m) {
        goRight = memo[`${m -x - 1}-${n -y}`] = uniquePathsFromPosition(x + 1, y, m, n);
    }
    let goDown: number = 0;
    if (y < n) {
        goDown = memo[`${m - x}-${n - y - 1}`] = uniquePathsFromPosition(x, y + 1, m, n);
    }

    return goRight + goDown;
}