function solution(wallpaper) {
    let minRow = Infinity, minCol = Infinity;
    let maxRow = -Infinity, maxCol = -Infinity;
    
    for (let row = 0; row < wallpaper.length; row++) {
        for (let col = 0; col < wallpaper[row].length; col++) {
            if (wallpaper[row][col] === '#') {
                minRow = Math.min(minRow, row);
                minCol = Math.min(minCol, col);
                maxRow = Math.max(maxRow, row);
                maxCol = Math.max(maxCol, col);
            }
        }
    }
    
    return [minRow, minCol, maxRow + 1, maxCol + 1];
}