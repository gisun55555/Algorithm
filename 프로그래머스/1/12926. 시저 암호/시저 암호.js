function solution(s, n) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        let x = 0;

        if ('a' <= s[i] && s[i] <= 'z') {
            x = s[i].charCodeAt(0) + n;
            if (x > 'z'.charCodeAt(0)) {
                x -= 26;
            }
            result += String.fromCharCode(x);
        } else if ('A' <= s[i] && s[i] <= 'Z') {
            x = s[i].charCodeAt(0) + n;
            if (x > 'Z'.charCodeAt(0)) {
                x -= 26;
            }
            result += String.fromCharCode(x);
        } else {
            result += s[i];
        }
    }

    return result;
}
