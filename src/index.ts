
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
    const arrClone = structuredClone(arr)
    let swapped: boolean
    
    for(let i=0; i<arrClone.length-1; i++) {
        swapped = false
        for(let j=0; j<arrClone.length-i-1; j++) {
            if(arrClone[j] > arrClone[j+1]) {
                [arrClone[j], arrClone[j+1]] = [arrClone[j+1], arrClone[j]]
                swapped = true
                callback?.({array: structuredClone(arrClone), swapped: swapped})
            }
        }
        if(!swapped) {
            callback?.({array: structuredClone(arrClone), swapped: swapped})
            break
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

const arr = [ 42, 32, 123, 4, 10, 41, 50, 120, 1 ];

console.log(bubbleSort(arr))

