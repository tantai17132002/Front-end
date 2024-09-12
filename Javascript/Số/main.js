// 1. Kiểu tra kết quả có phải NaN không
var bot = 20 / 1;
console.log(isNaN(bot))

//2. Chuyển đổi dữ liệu số qua chuỗi
var age = 20;
var myString = age.toString();
console.log(typeof myString) //Có thể phân biệt bằng màu của dữ liệu (xanh: số; trắng: chuỗi)

//3. Làm tròn số thập phân, kết quả chuyển về string
var lamTron = 318.101832192;
console.log(lamTron.toFixed(2)); // chỉ lấy 2 số sau dấu phẩy
