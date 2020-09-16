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



//把一个数组从大到小排列
//先从两个数开始
let sort2 = (numbers) => {
    return numbers[0] < numbers[1] ? [numbers[0], numbers[1]] : [numbers[1], numbers[0]]
};
//下面尝试一下三个数的数组排序
//和上面找最小值采用一样的思路，但是不知道啊啊a，b，c哪一个最小，后面的sort2里面的参数无法确定
// let sort3 = ([a,b,c])=>{
//     return [min([a,b,c]),sort2([?,?])
// }
//这时，需要我们把最小的值从数组里面删去，才能进行后面两个数的排序
//首先我们需要先创造一个函数，来求出最小值的下标
let minIndex = (numbers) => {
    return numbers.indexOf(min(numbers))
}; //这时一个取巧的办法
//这时我们可以得到最小值的下标，下面来修改我们的代码
let sort3 = (numbers) => {
    let index = minIndex(numbers)
    let minNum = numbers[index]
    numbers.split(index, 1)
    return [minNum].concat(sort2(numbers))
};
//长度为4的数组
let sort4 = (numbers) => {
    let index = minIndex(numbers)
    let minNum = numbers[index]
    numbers.split(index, 1)
    return [minNum].concat(sort3(numbers))
};

//通过一个函数实现不同长度的数组
let sort = (numbers) => {
    let index = minIndex(numbers)
    let minNum = numbers[index]
    numbers.split(index, 1)
    return [minNum].concat(sort(numbers))
}; //又是一个死循环，继续改进

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