function solution(name, yearning, photo) {
    const yearningMap = new Map();
    name.forEach((person, index) => {
        yearningMap.set(person, yearning[index]);
    });

    return photo.map(group => {
        return group.reduce((sum, person) => sum + (yearningMap.get(person) || 0), 0);
    });
}