function solution(keymap, targets) {
    let minKeyPress = {};
    
    keymap.forEach((keys, index) => {
        for (let i = 0; i < keys.length; i++) {
            let char = keys[i];
            if (!minKeyPress[char] || minKeyPress[char] > i + 1) {
                minKeyPress[char] = i + 1;
            }
        }
    });
    
    let result = targets.map(target => {
        let totalPress = 0;
        
        for (let char of target) {
            if (!minKeyPress[char]) return -1; 
            totalPress += minKeyPress[char];
        }
        
        return totalPress;
    });
    
    return result;
}