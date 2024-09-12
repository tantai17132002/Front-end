// 1 Chuỗi in ra có ""
var fullName  = 'Tan \'Tai\'';
console.log(fullName.length); //độ dài chuỗi, >80 ký tự thì tách chuỗi ra hoặc enter xuống dòng

// 2. Template string ES6: đưa giá trị của biến vào chuỗi
var firstName = 'Tai';
var lastName = 'Tran';

console.log(`Tôi là: ${firstName} ${lastName}`);

//3. Find index: Tìm vị trí ký tự trong chuỗi, bắt đầu từ 0 
var myString = 'Hoc JS boi JS tai F8!';

console.log(myString.indexOf('JS',6)) //indexOf: tìm kiếm ký tự giống nhau được
console.log(myString.lastIndexOf('JS'));

console.log(myString.search('JS')) //search: chỉ tìm kiếm ký tự khác nhau

//4. Cut string: cắt chữ JS
var myString2 = 'Hoc JS tai F8!';
console.log(myString2.slice(4, 6));

//5. Replace: ghi đè
console.log(myString.replace(/JS/g, 'Javascript')); // (/JS/g): biểu thức chính quy, dùng với search

//6. Chuyển đổi thành chữ in hoa
console.log(myString2.toLocaleUpperCase());

//7. Chuyển đổi thành chữ thường
console.log(myString2.toLocaleLowerCase());

//8. Trim: loại bỏ khoảng trống ở đầu và cuối của chuỗi
console.log(myString2.trim()); 

//9. Split: tìm 1 hoặc nhiều điểm chung để tách 1 chuỗi và đưa về 1 mảng
var languages = 'Javascript';
console.log(languages.split(''));

//10. Lấy 1 ký tự bởi biển cho trước

//a) Cách 1: không có thì trả về chuỗi rỗng
var myString3 = 'Tan Tai'
console.log(myString3.charAt(1));
//b) Cách 2: 
console.log(myString3[1]);