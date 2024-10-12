function isPalindrome(x: number): boolean {
    if (x < 0) {
        return false;
    }

    const s: string = x.toString();
    for (let i = 0; i < s.length / 2; i++) {
        if (s.charAt(i) !== s.charAt(s.length - i - 1)) {
            return false;
        }
    }

    return true;
    /*
    number only solution?
    123321
    modulo(10) = 1
    log(10) => start
    929
    modulo 1000 = 929/100 = 9
    modulo 10 = 9
    modulo 100 = 29/10 = 2
    */
};