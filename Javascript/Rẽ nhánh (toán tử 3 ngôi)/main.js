// 1. Rẽ nhánh: If-else if-else  ( < 3 cây mới dùng và toán tử so sánh)

var date = 2;

if (date === 2) {
    console.log('Hôm nay là thứ 2');
} else if (date === 4){
    console.log('Hôm nay là thứ 4');
} else {
    console.log('Không biết')
}

//2. Rẽ nhánh: Switch (>3 cây và biết trước giá trị mới dùng)
var date = 5;
switch(date) {
    case 2: 
        console.log('Hôm nay là thứ 2');
        break
    case 3: 
        console.log('Hôm nay là thứ 3');
        break
    case 4: 
        console.log('Hôm nay là thứ 4');
        break;
    default:
        console.log('Không biết')
}

//3. Toán tử 3 ngôi: 3 vế - ternary operator

var course = {
    name: 'Javascript',
    coin: -1
}

var result = course.coin > 0 ? `${course.coin} Coin` :  'Miễn phí'
console.log(result)