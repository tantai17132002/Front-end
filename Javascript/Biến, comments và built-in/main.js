//1. Tạo khối commets: / + **

//2. khai báo biến 
var fullName = 'Tai Tran';

//3. Hàm built-in: hàm xây dựng sẵn có trong js

//a) In ra hộp thoại 1 nút ok
alert(fullName); 

// b) in ra giá trị trong Console
console.log(fullName);

// c) in ra hộp thoại được hoặc hủy
confirm('toi là nam');

//d) in ra hộp thoại có input, ok, hủy
prompt('Giới tính của bạn!');

//e) Xét thời gian chạy (mini giây) để chạy đoạn code, chỉ hiện 1 lần
setTimeout(function() {
    alert('Thong Bao')
}, 1000)

//f) Xét thời gian chạy (mini giây) để chạy đoạn code, hiện liên tục theo thời gian
setInterval(function() {
    console.log('thongbao' + Math.random()) //Random số
}, 1000)