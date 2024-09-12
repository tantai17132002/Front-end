// 1. Toán tử số học

// Lũy thừa
var a = 2;
var b = 2;
var c = a ** b 
console.log(c)

// Chia lấy số dư
var aA = 4;
var bB = 2;
var cC = aA % bB;
console.log(cC)

// Tăng 1 giá trị số, toán tử (++) dùng làm hậu tố (Postfix: trả về biến copy)
var d = 2;
d++;
console.log(d)

// Giảm 1 giá trị số, toán tử (--) dùng làm tiền tố (Prefix: trả về biến mới)
var dD = 10
--dD;
console.log(dD)

// 2. Toán tử gán
var a = 1;
a += 2; // x + y
console.log(a)

// 3. Toán tử chuỗi
var firstName = 'Tai';
var LastName = 'Tran';
console.log(firstName + ' ' + LastName);

// 4. Toán tử so sánh, có thể hiểu là kiểu dữ liệu boolean khi kết quả trả về true hoặc false, liên quan đến câu lệnh điều kiện

// a) == hoặc != : chỉ quan tâm đến phần tử bên trong biến 
var a = 1;
var b = 2;
if (a == b) {    // Không bằng: !=
    console.log('Đúng');
} else {
    console.log('Sai');
};
// b) === hoặc !===: quan tâm đến phần tử bên trong biến và kiểu dữ liệu

// 5. Toán tử logic

// a) trả về kiểu boolean
var a = 1;
var b = 2;
var c = 3;
if (a > 0 && b > 0 && c > 0) {  // And: xét từ trái qua phải, phần tử đầu ko nằm trong falsy thì xét phần tử tiếp theo và gắn giá trị đó cho biến
    console.log('Dung');    //Trường hợp nằm trong falsy: gắn giá trị cho biến
} else {
    console.log('Sai');
}

var a = 1;
var b = 2;
var c = 3;
if (a > 0 || b < 0 || c < 0) {  // Or: xét từ trái qua, thằng đầu tiên ko nằm trong falsy là lấy luôn gắn cho biến, có thằng true thì luôn đúng nên cho các giá trị sai hết thì false
    console.log('Dung');
} else {
    console.log('Sai');
}

var a = 1;
if (!(a > 0)) {  // Not: kết quả trả về phủ định lại
    console.log('Dung');
} else {
    console.log('Sai');
}