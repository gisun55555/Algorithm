class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length <= 1) return this.heap.pop();
        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return root;
    }

    peek() {
        return this.heap[0] || null;
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    _heapifyDown() {
        let index = 0;
        const lastIndex = this.heap.length - 1;

        while (true) {
            const leftChildIndex = index * 2 + 1;
            const rightChildIndex = index * 2 + 2;
            let smallestIndex = index;

            if (leftChildIndex <= lastIndex && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = leftChildIndex;
            }
            if (rightChildIndex <= lastIndex && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                smallestIndex = rightChildIndex;
            }
            if (smallestIndex === index) break;

            [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
            index = smallestIndex;
        }
    }
}

function solution(scoville, K) {
    const minHeap = new MinHeap();
    scoville.forEach(s => minHeap.push(s));

    let mixCount = 0;

    while (minHeap.size() > 1 && minHeap.peek() < K) {
        const leastSpicy = minHeap.pop();
        const secondLeastSpicy = minHeap.pop();
        const newScoville = leastSpicy + secondLeastSpicy * 2;
        minHeap.push(newScoville);
        mixCount++;
    }

    return minHeap.peek() >= K ? mixCount : -1;
}
