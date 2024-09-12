// 1. Dữ liệu nguyên thủy - Primitive Data: 1 biến lưu vào 1 vùng nhớ, khi thay đổi thì tạo ra vùng nhớ mới, không đè lên nhau 

// a) Number
var a = 1;

    // Kiểm tra kiểu dữ liệu
console.log(typeof a)

// b) String: chuỗi
var fullName = 'fj \ Tia';
console.log(fullName)

// c) Boolean: đúng hoặc sai
var isSuccess = true;

    // c.1) Truthy: Bất cứ giá trị nào khi dùng js chuyển đổi sang kiểu dl boolean mà có giá trị true
        console.log(!!'hi') //2 lần phủ định là khẳng định, thêm !! phía trước các giá trị truthy sẽ luôn trả về true

    /** c.2) Falsy: js chuyển đổi dữ liệu 6 kiểu này cho ra kết quả false
     * 0
     * false
     * '' hoặc ""
     * underfined
     * NaN: kết quả ko hợp lệ
     * null
     */

// d) underfined: không xác định
var age;

// e) Null: không có gì
var isNull = null; 

//f) Symbol
var id = Symbol('id'); //unique: tính duy nhất

// 2. Kiểu dữ liệu phức tạp - Complex Data

// a) Function: hàm

var myFunction = function() {
    alert('Hi. Xin chao cac ban!');
}

myFunction();

//b) Object types: gồm nhiều giá trị như list

//b.1) Object: định nghĩa key
var myObject = {
    nam: 'Tai',
    age: 18,
    adress: 'Ha Noi',
    myFunction: function() {

    }
};
console.log('myObject', myObject);

//b.1) Array: key tự động và tăng dần
var myArray = [
    'Html',
    'Javascript',
    'Python'
];
console.log('myArray', myArray)
