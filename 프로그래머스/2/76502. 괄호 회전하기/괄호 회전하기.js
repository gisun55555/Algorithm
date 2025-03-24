function solution(s) {
  const n = s.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    if (isValid(rotated)) {
      count++;
    }
  }

  return count;
}

function isValid(s) {
  const stack = [];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== pairs[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}
