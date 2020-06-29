
## OOP (Object-Oriented Programming) - 객체지향 프로그래밍

### ES6에서 class가 등장함으로써 프로토타입은 잘 쓰지 않음

### 프로토타입 기반 언어

#### 클래스 개념이 없는 JavaScript의 객체 생성 방법
1. 객체 리터럴
``` JavaScript
let obj = {};
obj.name = "Lee";
```
2. Object() 생성자 함수
``` JavaScript
let obj = new Object();
obj.name = "Lee";
```
3. 생성자 함수
``` JavaScript
function F() { }
let obj = new F();
obj.name = "Lee";
```
#
### 깨알 개념!

### @private, @public, @class, @param 이런 친구들은 무얼하냐?
> Those are in comments, the JS interpreter won’t even read them. They are comments for the developer and possibly can be used by an auto documentation tool or IDE for syntax help.
<br/><br/>
These are known as Tags in Javascript. They are used for documentation.