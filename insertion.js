function insertionSort (array) {
    for (let i = 1; i < array.length; i++){
        let current = array [i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array [j +1] = array[j];
            j--;
        }
        array[j+1] = current;
    }
    return array;
}
let numbers = [5,1,4,1,3,6];
insertionSort(numbers);

console.log(numbers);