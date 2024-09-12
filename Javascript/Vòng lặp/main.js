//1. For loop: Lặp với điều kiện đúng
    
    //a
    for (var i = 1; i <= 1000; i++) {
        console.log(i);
    }

    //b 
    var myArray = [
        'Javascript',
        'PHP', 
        'Java',
        'Dart'
    ];

    var arrLength = myArray.length;

    for (var i = 0; i < arrLength; i++) {
        console.log(myArray[i]); //in ra các phần tử của i
    };

//2. For/in loop: lặp qua key của đối tượng
    
    //a) Object
    var myInfo = {
        name: 'Tai',
        age: 18,
        address: 'QT, VN'
    }

    for (var key in myInfo) {
        console.log(key); //In key
        console.log(myInfo[key]); //in value
    }

    //b) Array
    var languages = [
        'Javascript',
        'PHP',
        'Python'
    ]

    for(var keyH in languages) {
        console.log(languages[keyH])
    }

//3. For/of loop: Lặp qua value của đối tượng

    //a) Chuoi:
    var string = 'TRANNGUYEN' 
    for(var value of string) {
        console.log(value)
    } 

    //b) object
    var myInfo = {
        name: 'oi',
        age: 29
    }

    for (var value of Object.values(myInfo)) {
        console.log(value)
    }

//4. While loop: lặp khi điều kiện đúng
var myArray = [
    'Javascriptxxx',
    'PHP',
    'Ruby'
]

var i = 0;
while(i < myArray.length) {
    console.log(myArray[i])
    i++;

}

//5. Do while: lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng
var i = 0;
var isSuccess = false;

do {
    i++;
    console.log('Nạp thẻ lần ' + i);

    if (false) {
        isSuccess = true;
    };

} while(!isSuccess && i <= 3);

//6. Break & Continue in loop: thoát & bỏ qua lần lặp sử dụng cho tất cả vòng lặp
    
    //a) Break 
    for (var i = 0; i < 10; i++) {
        console.log(i);

        if (i >= 5) {
            break
        }
    }

    //b) Continue in loop
    for (var i = 0; i < 10; i++) {
       if (i % 2 !== 0 ) {
            continue;
       }
       
       console.log(i);
    }

//7. Nested loop: vòng lặp lồng nhau
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (var i = 0;  i < myArray.length; i++) {
    for (var j = 0; j < myArray[i].length; j++) {
        console.log(myArray[i][j]);
    }
};

//8. Ví dụ thêm vòng lặp

    //a) Chạy lùi 100 về 0
    for (var i = 100; i > 0; i--) {
        console.log(i);
    };

    //b) 0 <= 100, mỗi lần lặp nhảy 5 bước
    for (var i = 0; i <= 100; i += 5) {
        console.log(i)
    }

    //c) 100 <= 0, nhảy 5 bước
    for (var i = 100; i >= 0; i -= 5) {
        console.log(i)
    }

//9. Đệ quy.

    //a) Đối tượng có sẵn tron js (Set): đặc tính chỉ chọn 1
var array = ['a', 'b', 'c', 'a', 'b', 'c']
console.log([...(new Set(array))]);

    //b) Đệ quy: hàm gọi lại chính nó
        //1. Xác định điểm dừng
        //2. Logic handle => tạo ra điểm dừng

    //c) Ví dụ hàm đệ quy

        //1. Đếm ngược số
        function countDown(num) {
            if (num > 0) {
                console.log(num);
                return countDown(num-1);
            }
            return num;
        }
        countDown(10);

        //2. Vòng lặp đệ quy
        function loop(start, end, cb) {
            if (start < end) {
                cb(start);
                return loop(start + 1, end, cb);
            }
        }

        var array = ['Javascript', 'PHP', 'Ruby'];

        loop(0, array.length, function(index) {
            console.log(array[index]);
        })

        //3. Tính giai thừa băng đệ quy: 3*2*1 = 6
        function giaithua(number) {
            if (number > 0) {
                return number * giaithua(number-1);
            }
            return 1;
        }

        console.log(giaithua(3))