var obj1 = {
    name: 'Lee',
    sayName: function () {
        console.log(this.name);
    }
}

var obj2 = {
    name: 'Kim'
}

obj2.sayName = obj1.sayName;

obj1.sayName(); // Lee
obj2.sayName(); // Kim