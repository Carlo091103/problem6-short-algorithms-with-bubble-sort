// sortingAlgoBubble.js

function bubbleSort(arr) {
    const n = arr.length;
    let swapped;
    let comparisons = ""; //String to store comparison details

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            comparisons += Comparing ${arr[i]} and ${arr[i + 1]}: ;
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
                comparisons += ${arr[i]} < ${arr[i+1]} Swapped \n;
            } else {
                comparisons += No swap needed \n;
            }
        }
        // Optimization: If no two elements were swapped in inner loop, the array is sorted
    } while (swapped);

    return {sortedArray: arr, comparisonDetails: comparisons};
}

function sortNumbers() {
    const numbers = [];
    for (let i = 0; i < 10; i++) {
        let num;
        do {
            num = parseInt(prompt(Enter number ${i + 1}:));
            if(isNaN(num)){
                console.log("Invalid input. Please enter a number.");
            }
        } while (isNaN(num));
        numbers.push(num);
    }
    const result = bubbleSort(numbers);
    console.log("Sorted array:", result.sortedArray);
    console.log("\nComparison details:\n", result.comparisonDetails);
}


sortNumbers();
