function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr [0];
    const left =[];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot){
            left.push(arr[i])
        }
        else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort];
}
const unsortedArray = [9,3,5,1,2,4,7,6,8];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray);