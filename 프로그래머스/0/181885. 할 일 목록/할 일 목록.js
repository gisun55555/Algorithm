function solution(todo_list, finished) {
    return todo_list.filter((task, index) => !finished[index]);
}
