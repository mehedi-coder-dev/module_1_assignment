//2) number question answer


function FilterNumbers(array) {
    const result = array.filter((element) => {
        if (element % 2 === 0) {
            return element;
        }
    });

    return result;
}

console.log(FilterNumbers([12, 34, 45, 23, 6, 78, 54, 90]));
