function merge(arr1, arr2) {
    // vars: results -> array, i -> arr1 pointer, j -> arr2 pointer
    const results = [];
    let i = 0;
    let j = 0;
    // iterate through arrays
    while(i < arr1.length && j < arr2.length) {
        // console.log(`arr1[${i}]: `, arr1[i]);
        // console.log(`arr2[${j}]: `, arr2[j]);
        // push which element has the greater value
        if(arr1[i] < arr2[j]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
        // console.log(`Loop ${i} or ${j}: `, results);
    }
    // loop through either arr1 or arr2 to push remaining elements
    while(i < arr1.length) {
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j]);
        j++;
    }
    // return sorted array
    // console.log("result array: ", results);
    return results;
}

function mergeSort(arr) {
    // base case
    if(arr.length <= 1) return arr;
    // create subarrays recursively with midpoint
    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    // return a singular array that has been sorted with subarray elements
    return merge(left, right);
}

module.exports = { merge, mergeSort};