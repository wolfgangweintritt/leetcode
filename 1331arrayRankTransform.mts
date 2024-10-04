function arrayRankTransform(arr: number[]): number[] {
    const withIdx: number[][] = arr.map((n: number, idx: number): number[] => [n, idx]);
    const sorted: number[][] = withIdx.sort((a: number[], b: number[]): number => a[0] - b[0]);

    const solution: number[] = [];
    let rank = 1;
    let previous = NaN;
    sorted.forEach((elem: number[]) => {
        if (previous !== elem[0]) {
            rank++;
        }
        solution[elem[1]] = rank;
        previous = elem[0];
    });
    return solution;
};