let min = (numbers) => {
    if (numbers.length > 2) {
        return min([numbers[0], min(numbers.slice(1))])
    } else {
        return Math.min.apply(null, numbers)
    }
}

let minIndex = (numbers) => {
    return numbers.indexOf(min(numbers))
};

let sort = (numbers) => {
    if (numbers.length > 2) {
        let index = minIndex(numbers)
        let minNum = numbers[index]
        numbers.splice(index, 1)
        return [minNum].concat(sort(numbers))
    } else {
        return numbers[0] < numbers[1] ? numbers : numbers.reverse()
    }
};
sort([1, 56, 78, 5, 87])