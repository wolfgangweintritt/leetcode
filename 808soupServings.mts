const cache: Map<string, number> = new Map();

function soupServings(n: number): number {
    cache.clear();
    if (n > 4800) { // shortcut, manually tested
        return 1;
    }

    return soupRecursion(n, n, 1);
};

function soupRecursion(a: number, b: number, depth: number): number {
    const case1A = a - 100;
    const case1B = b;

    const case2A = a - 75;
    const case2B = b - 25;
    
    const case3A = a - 50;
    const case3B = b - 50;

    const case4A = a - 25;
    const case4B = b - 75;

    return checkCase(case1A, case1B, depth)
        + checkCase(case2A, case2B, depth)
        + checkCase(case3A, case3B, depth)
        + checkCase(case4A, case4B, depth);
}

function checkCase(a: number, b: number, depth: number): number {
    //console.log(`current case ${a}|${b}, depth: ${depth}`);
    if (cache.get(`${a}|${b}`) !== undefined) {
        //console.log('cache hit');
        return cache.get(`${a}|${b}`);
    }

    let result = 0;
    if (a <= 0 && b > 0) {
        result = 1 * Math.pow(0.25, depth);
        //console.log('result: ' + result);
    } else if (a <= 0 && b <= 0) {
        result = 0.5 * Math.pow(0.25, depth);
        //console.log('result: ' + result);
    } else if (b <= 0 && a > 0) {
        result = 0;
        //console.log('result: ' + result);
    } else {
        result = soupRecursion(a, b, depth + 1);
    }
    cache.set(`${a}|${b}`, result);

    return result;
}