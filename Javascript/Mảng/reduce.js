//1. Phương thức reduce (có sẵn)=> Tính tổng các phần tử 

const numbers = [1, 2, 3, 4, 5]

// TH1: callback(gọi lại): biến tích trữ (phần tử đầu tiên mảng), biến mới (phần từ thứ 2 mảng)
const result = numbers.reduce((total, number) => {
    return total + number
})

console.log(result)

//TH2: callback and initiaValue (giá trị ban đầu): biến tích trữ (initiaValue), biến mới (phần tử đầu tiên mảng)
const result2 = numbers.reduce((total, number) => {
    return total + number
}, 10)
console.log(result2)

//2. Tự định nghĩa phương thức reduce
Array.prototype.reduce3 = function(callback, result) {
    let i = 0 //ptu đầu
    if (arguments.length < 2) {
        i = 1
        result = this[0]
    }
    for(;i < this.length; i++) {
        result = callback (result, this[i], i, this) //callback, biến lưu trữ, index, array gốc
    }
    return result
} 

const result3 = numbers.reduce3((total, number) => {
    return total + number
}, 10)

console.log(result3)