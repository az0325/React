// 1. 생성자 함수 + new 연산자
// 생성자 함수(Constructor)
function Person(name) {
    // 프로퍼티
    this.name = name;

    // 메소드
    this.setName = function (name) {
        this.name = name;
    };

    // 메소드
    this.getName = function () {
        return this.name;
    };
}

// 인스턴스의 생성
var me = new Person('Lee');
console.log(me.getName()); // Lee

// 메소드 호출
me.setName('Kim');
console.log(me.getName()); // Kim

var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('Choi');

console.log(me);  // Person { name: 'Lee', setName: [Function], getName: [Function] }
console.log(you); // Person { name: 'Kim', setName: [Function], getName: [Function] }
console.log(him); // Person { name: 'Choi', setName: [Function], getName: [Function] }

/**
 * 위와같이 인스턴스를 여러개 생성하면 (같은 내용의 인스턴스가 여러개) 메모리 낭비가 되버림
 * 이를 해결하기 위해 프로토타입을 사용!
 */

/**
 * @method Function.prototype.method
 * @param ({string}) (name) - (메소드 이름)
 * @param ({function}) (func) - (추가할 메소드 본체)
 */

Function.prototype.method = function (name, func) {
    // 생성자함수의 프로토타입에 동일한 이름의 메소드가 없으면 생성자함수의 프로토타입에 메소드를 추가
    // this: 생성자함수
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
};

// 생성자 함수 - 클래스이제 생성자 역할
function Person(name) {
    this.name = name;
}

// 생성자함수 Person의 프로토타입에 메소드 setName을 추가
// Person.method('setName', function (name) {
//     this.name = name;
// });

Person.method('setName', (name) => {
    this.name = name;
});


// 생성자함수 Person의 프로토타입에 메소드 getName을 추가
// Person.method('getName', function () {
//     return this.name;
// });

Person.method('getName', () => {
    return this.name;
});

var me = new Person('Lee');
var you = new Person('Kim');
var him = new Person('choi');

console.log(Person.prototype); // Person { setName: [Function], getName: [Function] }

console.log(me);  // Person { name: 'Lee' }
console.log(you); // Person { name: 'Kim' }
console.log(him); // Person { name: 'choi' }