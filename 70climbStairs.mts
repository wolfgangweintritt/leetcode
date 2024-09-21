const m: Map<number, number> = new Map();

function climbStairs(n: number): number {
    console.log(n);
    if (m.get(n)) {
        return m.get(n);
    }

    let r;
    if (n === 1) {
        r = 1;
    } else if (n === 2) {
        r = 2;
    } else {
        r = climbStairs(n-1) + climbStairs(n-2);
    }
    m.set(n, r);

    return r;
};