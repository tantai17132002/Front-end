//1. Object là lưu thông tin của 1 đối tượng cụ thể

//2. Tạo 1 Object
var gameChoi = 'game'

var myInfo = {
    name: 'Tai',
    tuoi: 20,
    [gameChoi]: 'LMHT' //thêm biến vào object
};

    //a) Thêm key vào object
    myInfo['gioi_tinh'] = 'Nam' //C1
    myInfo.email = 't@gmail.com' //c2

    //b) Gọi dữ liệu của key
    console.log(myInfo.name); //nếu key không có trả về undefined

    //c. Xóa 1 key
    delete myInfo.tuoi;
    console.log(myInfo);

    //d. Thêm function vào object: phương thức (method)
    var myInfoNew = { 
        name: '30', //thuộc tính (property)
        getName: function() {
            return this.name; //this: myInfoNew
        }
    }
    console.log(myInfoNew.getName());

//3. Object constructor: Xây dụng bản thiết kế đối tượng dùng chung, String, Number, Array, Date: Object constructor
    //Bản thiết kế: các đối tượng tạo ở trong
function User(firstName, lastName, avatar) {  //Tên hàn phải viết hoa
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`; //this: gọi ông nào thì là ông đó
    }
};

    //Tạo đối tượng
var author = new User('Tai', 'Tran', 'Avatar');
var user = new User('Nguyen', 'Nguyen', 'Avatar');

console.log(author.getName())
console.log(user.getName())

//4. Object prototype - basic: Đối tượng nguyên mẫu, tạo ở ngoài bản thiết kế
User.prototype.className = 'F8';
User.prototype.getClassName = function() {
    return this.className;
};

var user = new User('Tai', 'Tran', 'Avatar1');
var user2 = new User('Nguyen', 'Nguyen', 'Avatar2');

console.log(user.className);
console.log(user2.getClassName())

//5. Đối tượng Date: thời gian
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1; //kq: 0-11, nên + 1 
var day = date.getDate();

console.log(`${day}/${month}/${year}`)

//6. Math object: đối tượng về toán, không phải object constructor

    //PI
    console.log(Math.PI);

    //Làm tròn số: số thập phân -> số nguyên
    console.log(Math.round(1.5));

    //Giá trị tuyệt đối
    console.log(Math.abs(-4));

    //Làm tròn trên: > 0
    console.log(Math.ceil(4.1));

    //Làm tròn dưới:
    console.log(Math.floor(4.5));
    
    //Số ngẫu nghiên: trả về thập phân < 1
    console.log(Math.random());

    //Lấy số nhỏ nhất
    console.log(Math.min(21, 11, 1235, 121));

    //Lấy số lớn nhất
    console.log(Math.max(21, 11, 1235, 121));
