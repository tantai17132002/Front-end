// I. Array: Cách tạo mảng, key thì chạy tự động
var languages = [
    'Toi',
    'La',
    'ai',
    null
];
console.log(languages);

// II. Mảng theo phương thức (methods) không phải 1 hàm

    //1. Kiểm tra dữ liệu phải mảng array không
    console.log(Array.isArray(languages));

    //2. Lấy vị trí của phần tử trong mảng
    console.log(languages[0]);

    //3. Chuyển từ array qua string có thể thay đổi dấu ngăn cách giữa chúng
    console.log(languages.join(' - '));

    //4. Pop: xóa phần tử cuối mảng và in ra phần tử đã xóa, xóa hết thì kết quả undefined
    console.log(languages.pop());

    //5. Push: Thêm 1 hoặc nhiểu phần tử vào cuối mảng và trả về giá trị mới của mảng
    console.log(languages.push('TN'));
    console.log(languages);

    //6. Shift: Xóa 1 phần tử đầu mảng và trả về giá trị đã xóa
    console.log(languages.shift());

    //7. Unshift: Thêm 1 hoặc nhiều phần tử vào đầu mảng và trả về giá trị mới của mảng
    console.log(languages.unshift('Oi', 'la'));

    //8. Splitcing: 
        
        //a) Xóa phần tử
        languages.splice(0, 1); //0: vị trí đặt con trỏ, 1: xóa 1 phần tử
        console.log(languages); 

        //b) Chèn phần tử
        languages.splice(1, 0, 'ppp');
        console.log(languages);

    //9. Concat: nối mảng.
    var languages2 = [
        'jk',
        'df',
        'ok'
    ];
    console.log(languages.concat(languages2)) //truyền phần tử của biến 2 sang biến 1

    //10. Slicing: Cắt 1 hoặc vài phần tử
    console.log(languages2.slice(-2, -1)) //ở dưới lên là tính âm bắt đầu từ -1

//III. Mảng theo phương thức hàm
var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'HTML, CSS',
        coin: 0
    },
    {
        id: 3,
        name: 'Python',
        coin: 450
    },
    {
        id: 4,
        name: 'R',
        coin: 0
    },
    {
        id: 5,
        name: 'Python',
        coin: 200
    }
];

    //1. Duyệt qua từng phần tử trong mảng
    courses.forEach(function(course, index) { //callback: hàm được gọi lại
        console.log(index, course);
    }); 

    //2. Kiểm tra các phần tử trong mảng thõa mản điều kiện, chỉ xét 1 thằng nếu sai (ở đây: khóa học miễn phí)
    var isFree = courses.every(function(course, index) { 
        console.log(index)
        return course.coin === 0;
    }); 
    console.log(isFree);

    //3. Kiểm tra các phần tử trong mảng thõa mãn điều kiện, xét 1 ông đúng là dc
    var isFree = courses.some(function(course, index) { 
        console.log(index)
        return course.coin === 0;
    }); 
    console.log(isFree);

    //4. Tìm kiếm phần tử trong mảng, trả về kết quả 1 phần tử thôi
    var course = courses.find(function(course) { 
        return course.name === 'Python';
    }); 
    console.log(course);

    //5. Tìm kiếm phần tử trong mảng, trả về kết quả nhiều phần tử thõa mãn điều kiện
    var course = courses.filter(function(course) { 
        return course.name === 'Python';
    }); 
    console.log(course);

    //6. Thay đổi 1 phần tử trong mảng
    function courseHandler(course, index, originArray) {
        return {
            id: course.id,
            name: `Khoa hoc: ${course.name}`,
            coin: course.coin,
            coinText: `Gia: ${course.coin}`,
            index: index,
            originArray: originArray,
        }
    }

    var newCourses = courses.map(courseHandler);
    console.log(newCourses)

    //7. Nhận giá trị duy nhất sau khi tính toán trong mảng
        
    //a) Sum coin
        function coinHandler(accumulator, currentValue) { //acc: giá trị khởi tạo ban đầu, currva: nó chỉ mục nào thì in ra value object đó, currentIndex: chỉ giá trị cột, originArray: mảng ban đầu
            return accumulator + currentValue.coin
        }

        var totalCoin = courses.reduce(coinHandler, 0) //0: giá trị ban đầu khởi tạo, ko bắt buộc
        console.log(totalCoin)

        //b) Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
        var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

        var flatArray = depthArray.reduce(function(flatOutput, DepthItem) {
            return flatOutput.concat(DepthItem);
        }, []);

        console.log(flatArray);

        //c) Lấy ra các khóa học đưa vào 1 mảng mới 
        var topics = [
            {
                topic: "Front-end",
                courses: [
                    {
                        id: 1,
                        title: "HTML, CSS"
                    },
                    {
                        id: 2,
                        title: "Javascript" 
                    }
                ]
            },
            {
                topic: "Back-end",
                courses: [
                    {
                        id: 1,
                        title: "PHP"
                    },
                    {
                        id: 2,
                        title: "NodeJS" 
                    }
                ]
            }
        ];

        var newCourses = topics.reduce(function(courses, topic) {
            return courses.concat(topic.courses)
        }, [])

        console.log(newCourses)