var e = 10;
function sum(a) {
    return function (b) {
        return function (c) {
            // 외부 함수 범위 (outer functions scope)
            return function (d) {
                // 지역 범위 (local scope)
                return a + b + c + d + e;
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)); // log 20


var e = 10;
function sum1(a) {
    return function sum2(b) {
        return function sum3(c) {
            // 외부 함수 범위 (outer functions scope)
            return function sum4(d) {
                // 지역 범위 (local scope)
                return a + b + c + d + e;
            }
        }
    }
}

var s = sum1(1);
var s1 = s(2);
var s2 = s1(3);
var s3 = s2(4);
console.log(s3) //log 20

var s = sum1(1)(2)(3)(4)
console.log(s)



// 정보 은닉
function Counter() {
    // 카운트를 유지하기 위한 자유 변수
    var counter = 0;
    console.log(counter)

    // 클로저
    this.increase = function () {
        return ++counter;
    };

    // 클로저
    this.decrease = function () {
        return --counter;
    };
}

const counter = new Counter();

console.log(counter.increase()); // 1
console.log(counter.decrease()); // 0
console.log(counter) // Counter { increase: [Function], decrease: [Function] }