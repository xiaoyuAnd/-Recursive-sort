//实现求最小值的下标
let minIndex = (numbers) => {
    let indexInt = 0
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < numbers[indexInt]) {
            indexInt = i
        }
    }
    return indexInt
};
//实现交换swap， 交换一个数组中的两个值
let swap = (numbers, i, j) => {
    let temp = numbers[i]
    numbers[i] = numbers[j]
    numbers[j] = temp
}

let sort = (numbers) => {
    for (let i = 0; i < numbers.length - 1; i++) {
        let index = minIndex(numbers.slice(i)) + 1
            //minIndex里面的numbers和下面的numbers没关系，他是在minIndex函数里面运行的，即使切了也不影响下面的numbers，i最开始为零，所以numbers.slice（0）切零个，就是原数组，因为切掉了i个，所以他的下标就和原来的数组不相等了，切掉了i个，后面加上i
        if (index !== i) { swap(numbers, index, i) }
    }
    return numbers
}