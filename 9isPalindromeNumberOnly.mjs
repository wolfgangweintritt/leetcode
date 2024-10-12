function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    // only positive numbers with >= 2 digits left
    const log10 = Math.floor(Math.log10(x));
    for (let i = log10; i > log10 / 2; i--) {
        const firstNumber = Math.floor(x / Math.pow(10, i)) % 10; // 1st loop iteration: 9229 => x / 10 ^ 3 => 9 % 10 => 9
        const lastNumber = Math.floor(x / Math.pow(10, log10 - i)) % 10; // 2nd loop iteration: 9229 => x / 10 ^ 1 => 922 % 10 => 2
        console.log(firstNumber);
        console.log(lastNumber);
        if (firstNumber !== lastNumber) {
            return false;
        }
    }
    return true;
}
;
console.log(isPalindrome(92));
console.log(isPalindrome(99));
console.log(isPalindrome(929));
console.log(isPalindrome(9229));
console.log(isPalindrome(9239));
console.log(isPalindrome(92329));
export {};
