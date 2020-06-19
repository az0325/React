## 함수형 Component

#### useState
- 컴포넌트에서 상태를 관리해야 되는 일
- class형 : state, setState
```JavaScript
import React, { useState } from 'react';

// useState() -> 괄호 안에 있는 값은 초기값
// 베열 비구조화 할당
// 여러개 선언 가능
const [value, setValue] = useState(0);
const [name, setName] = useState('');

// 값 변경
setValue(value + 1)
setName('이름')
```
#

#### useEffect
- 컴포넌트가 렌더링 될 때 마다 특정 작업을 수행하도록 설정 가능
- class형 : componentDidMount + componentDidUpdate
```JavaScript
import React, { useEffect } from 'react';

useEffect(() => {
    console.log('렌더링이 완료되었습니다!');
});
```
<br/>

1. 마운트 될 때(처음 실행 시)만 실행
- 함수의 두번째 파라미터로 비어있는 배열([]) 넣기
```JavaScript
import React, { useEffect } from 'react';

useEffect(() => {
    console.log('마운트 될 때만 실행됩니다.');
}, []);
```
<br/>

2. 특정 값이 업데이트될 때만 실행
- class형 : componentDidUpdate
- 함수의 두번째 파라미터로 특정 값을 집어넣어 그 값이 변경될 때만 지정된 작업 수행
```JavaScript
import React, { useEffect } from 'react';

// name 값이 변경될 때만 실행
useEffect(() => {
    console.log(name)
}, [name]);
```
<br/>

3. 언마운트 되기전이나, 업데이트 되기 직전에 실행
- 메무리 누수가 발생하지 않도록 정리(clean-up)
- 정확한 시점은 컴포넌트 마운트가 해제되는 때
#

#### useContext
- Context를 보다 쉽게 사용
#

#### useReducer
- useState 대체 함수
- 불변성을 지키면서 업데이트한 새로운 상태를 반환
```JavaScript
// 기본 형태
function reducer(state, action) {
  return { ... };
}


function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 }

        case 'DECREMENT':
            return { value: state.value - 1 }

        default:
            return state;
    }
}

// state : 현재 가르키고 있는 상태
// dispatch : 액션을 발생시키는 함수 => dispatch(action)
const [state, dispatch] = useReducer(reducer, { value: 0 })
```

#
https://ko.reactjs.org/docs/hooks-reference.html#usereducer