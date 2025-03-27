function solution(s) {
  const length = s.length;
  const middle = Math.floor(length / 2);
  
  if (length % 2 === 0) {
    return s[middle - 1] + s[middle];
  } else {
    return s[middle];
  }
}
