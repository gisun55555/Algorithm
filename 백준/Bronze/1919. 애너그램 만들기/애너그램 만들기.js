const fs = require('fs');
const [A, B] = fs
	.readFileSync('./dev/stdin')
	.toString()
	.trim()
	.split('\n')
	.map((v) => v.split(''));

let answer = 0;
while (A.length > 0) {
	const a = A.shift();
	const index = B.findIndex((v) => v == a);
	if (index >= 0) {
		B.splice(index, 1);
	} else {
		answer++;
	}
}
answer += B.length;
console.log(answer);