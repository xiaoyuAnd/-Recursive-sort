let quickSort = (numbers) => {
    if (numbers <= 1) { return numbers }
    let pivotIndex = Math.floor(numbers.length / 2)
    let pivot = numbers.splice(pivotIndex, 1)[0]
    let left = []
    let right = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < pivot) {
            left.push(numbers[i])
        } else {
            right.push(numbers[i])
        }
        return quickSort(left).concat(pivot, quickSort(right))
    }
}