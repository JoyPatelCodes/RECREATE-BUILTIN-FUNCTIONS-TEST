// DEFINE YOUR FUNCTIONS HERE BASED ON THE PROVIDED CRITERIA

// Function that Determines if something is Included in the Array
function includes(item, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return true;
        }
    }
        return false;
}

// Function that Identifies the Index of the Provided Item
function indexOf(item, array) {
    let included = 0;
    for (let i = 0; i < array.length; i++) {
        if (item === array[i]) {
            return included = i;
        }
    }
    return -1;
}

// Function that Flips the Order in the Array
function reverse(array) {
    let revArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        revArray.push(array[i]);
    }
    return revArray;
}

// Function that Slices the Array
function slice(start, stop, array) {
    let sliceArray = [];
    for (let i = start; i < stop; i++) {
        sliceArray.push(array[i]);
    }
    return sliceArray;
}

// Function that Merges Two Different Arrays
function concat(array1, array2) {
    return [...array1, ...array2];
}

// Function that Creates a String out of the Array
function join(sep, array) {
    let joinArray = ''
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            joinArray += array[i];
            return joinArray;
        }
        joinArray += array[i] + sep;
    }
    return joinArray;
}

// Function that Determines the Maximum Numerical Element in the Array
function max(array) {
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}