// 1. Hàm Declaration
showDialog();
function showDialog() {
    alert('Xin chào các bạn');
}

// 2. Hàm Expression
var fun = function() {
    alert('Xin chào các bạn');
}
showDialog();


// 3. Hàm có tham số và đối số
function showLog(message, message2) { //message: tham số, Xin chào: đối số
    console.log(message);
    console.log(message2);
};
showLog('Xin chào', 'Chào xin');

//4. Hàm có đối tượng arguments (mảng array)
function showLog2() {
    console.log(arguments);
};
showLog2('Log 1', 'Log 2', 'Log 3');

//5. Hàm có vòng for
function showLog3(){
    var myString = '';
    for(var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}
showLog3('Log 1', 'Log 2', 'Log 3');

// 6. Hàm có return: trả về giá trị đó, dòng sau return đợi return chạy xong mới chạy
function cong(a, b) {
    return a + b;
}
var result = cong(2, 8);
console.log(result);