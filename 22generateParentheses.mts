// generator and template strings are nicer to read but slower :<
/*function generateParenthesis(n: number): string[] {
    return [...helper('', n, 0, 0)]
};

function* helper (solution: string, n: number, opened: number, closed: number): Generator<string> {
    if (closed === n) {
        yield solution;
    }

    if (opened < n) {
        yield* helper(`${solution}(`, n, opened + 1, closed);
    }
    
    if (closed < opened) {
        yield* helper(`${solution})`, n, opened, closed + 1);
    }
}*/

let solutions = [];
function generateParenthesis(n: number): string[] {
    solutions = [];
    helper('', n, 0, 0);
    return solutions;
};

function helper (solution: string, n: number, opened: number, closed: number): void {
    if (closed === n) {
        solutions.push(solution);
    }

    if (opened < n) {
        helper(solution + '(', n, opened + 1, closed);
    }
    
    if (closed < opened) {
        helper(solution + ')', n, opened, closed + 1);
    }
}