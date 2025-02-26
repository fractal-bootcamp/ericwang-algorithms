
export type BinarySearchState = {
    array: number[],
    midIndex: number,
    target: number,
}

export function binarySearch(
    sortedArr: number[], 
    target: number,
    offset: number = 0, // i need to track where i am in the wider array if i want to return the index from a sub-array
    callback?: (state: BinarySearchState) => void
): number | null {
    if(sortedArr.length === 0) return null // base case

    const midIndex = Math.floor(sortedArr.length / 2)
    const mid = sortedArr[midIndex]

    callback?.({array: sortedArr, midIndex, target})

    if(mid === target) {
        console.log('found')
        return midIndex + offset
    } else if (target > mid) {
        return binarySearch(sortedArr.slice(midIndex + 1, sortedArr.length), target, offset+midIndex+1, callback)
    } else if (target < mid) {
        return binarySearch(sortedArr.slice(0, midIndex), target, offset, callback)
    } else {
        return null
    }
}

function dfs(graph, start) {

    
}

function bfs(arr: number[]) {
    
}

export type BubbleSortState = {
    array: number[],
    swapped: boolean,
}

export function bubbleSort(
    arr: number[],
    callback?: (state: BubbleSortState) => void
) {
    let swapped: boolean
    
    for(let i=0; i<arr.length-1; i++) {
        swapped = false
        
        for(let j=0; j<arr.length-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                swapped = true
                callback?.({array: arr, swapped: swapped})
            }
            if(!swapped) break
        }
    }
    return arr
}

function selectionSort(arr: number[]) {

}

function insertionSort(arr: number[]) {

}

function mergeSort(arr: number[]) {

}

function quickSort(arr: number[]) {

}

const arr = [ 2, 3, 4, 10, 40, 50, 120, 123, 1235 ];

binarySearch(arr, 1235, (state) => {
    console.log(`Searching in: ${state.array}, Mid index: ${state.midIndex}, Target: ${state.target}`);
});

