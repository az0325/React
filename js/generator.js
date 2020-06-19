const { range } = require("rxjs")

function* gen() {
    yield 1
    yield 2
    yield 4
    yield 8
}

let iter = gen()

for (let e of iter)
    console.log(e)

let iter2 = gen()
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())
console.log(iter2.next())

// 제너레이터 성질2 - 무한한 이터레이터 만들기 삽가능
function* gen2() {
    let i = 1
    while (true)
        yield i++
}

let 무한 = gen2()
// for (let i = 0; i < 100; i++)
//     console.log(무한.next())

// 제너레이터 성질3 - 소통이 가능함
function* gen3(a) {
    // console.log(a)
    let i = a
    // let ee = yield i
    // console.log(ee)
    // i += ee
    i += yield i // i를 내보내고 들여옴 -> 그래서 처음에 들여올 수 없어서 next()를 씀
    i += yield i
    i += yield i
    i += yield i
    i += yield i
}

let sotong = gen3(1)
console.log(sotong.next())
console.log(sotong.next(20))
console.log(sotong.next(300))
console.log(sotong.next(4000))
console.log(sotong.next(50000))