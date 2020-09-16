//找出两个数中最小的[a,b]
let minOf2 = (numbers) => {
    return numbers[0] < numbers[1] ? numbers[0] : numbers[1]
}
minOf2.call(null, [3, 5]);
//下面找出三个数里面最小的[a,b,c]
let minOf3 = (numbers) => {
    return minOf2([a, minOf2([b, c])])
};
//下面求四个数里面最小的
let minOf4 = (numbers) => {
    return minOf3([a, minOf3([b, c, d])])
};
//结论：求任意长度数组的最小值都可以通过minOf2实现

//求最小值的时候，不同的值我们要申明不同的函数，那么我们能不能用一个函数来实现呢
let min = (numbers) => {
        return min([numbers[0], min(numbers.slice(1))])
    } //这是一个递归，但是没有结束条件会陷入死循环，下面我们加入退出条件
    //当数组还剩两个数的时候，就可以结束，然后逐个比较了
let min = (numbers) => {
    if (numbers.length > 2) {
        return min([numbers[0], min(numbers.slice(1))])
    } else {
        return Math.min.apply(null, numbers)
    }
}