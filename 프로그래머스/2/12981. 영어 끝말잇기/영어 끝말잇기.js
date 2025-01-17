function solution(n, words) {
    const usedWords = new Set();
    usedWords.add(words[0]);

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];
        const previousWord = words[i - 1];

        if (
            previousWord[previousWord.length - 1] !== currentWord[0] ||
            usedWords.has(currentWord)
        ) {
            const person = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [person, turn];
        }

        usedWords.add(currentWord);
    }

    return [0, 0];
}
