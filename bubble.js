function bubbleSort(arr) {
    // Iterate through each element in array
    for(let i = 0; i < arr.length; i++) {
        // Create bool var to stop loop if no elements were swapped
        let swapped = false;
        // iterate through array again using j to access the current element and j+1 to access the next element
        for(let j = 0; j < arr.length - 1; j++) {
            // if curr element > next element swap positions
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swapped = true;
            }
        }
        // if nothing was swapped break loop
        if(!swapped) break;
    }
    return arr;
}

module.exports = bubbleSort;