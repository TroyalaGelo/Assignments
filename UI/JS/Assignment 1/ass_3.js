console.log("Assignment 3")

// doesn't need to be its own function
function merge(arr1,arr2) {
    return new Set(arr1.concat(arr2));
}


arr1 = [1,2,3,4,5];
arr2 = [1,2,25,4,8];

console.log(merge(arr1, arr2));