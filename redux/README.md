## Redux
1. 사용 이유
- 상태 관리 로직을 컴포넌트 외에서 처리
- 단방향으로 데이터 변경 - 양방향으로 데이터로 주고받을 경우, 복잡해지고 어떤 변화가 일어날지 예측 할 수 없음
#

#### Store
- 상태 값들을 내장
- ex) dataState 등 Root에 선언한 state들의 값들
#

#### Reducer
- 상태를 변화시키는 로직들
- ex) 계산식 (calculateDataState)
#

#### Dispatch
- store 내장함수
- 액션을 발생시키는 함수
#

#### Action (Object)
- Store에 있는 state를 변경
- 동작이 아니라 값이라고 생각하면 쉬움!
#

#### Provider
- 스토어 연동 
```JavaScript
// 아래 친구들은 세트라고 생각하는게 쉬움!

// Redux 관련 불러오기
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

// Store 생성
const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
```
#

#### Connet (Function)
- Component를 Store에 연동
```JavaScript
import { connect } from 'react-redux';
```

- params
1. mapStateToProps - store에 있는 state값을 받아서 component props로 반환
2. mapDisPatchToProps - dispatch를 받아서 
3. mergeProps - state와 dispatch 동시에 필요한 함수를 props로 전달
```JavaScript
// 여기서 짚고 넘어가야 할 것!
// 객체 형태로 return을 하고 싶을 때
const test = () => { return { value : 'a' } }

// {} 를 쓰면 암시적으로 return이 생략 가능하다
// 그럼 저 위에 상황에서는 어떻게 해야할까 -> () 사용을 해서 명시해주기
const test = () => ({ value : 'a' })
```
#

#### 순서
1. Components (View) : 이벤트 발생
2. Dispatch & Action : Dispatch가 객체(Action)을 Reducer에 전달
3. Reducer & Store : 받은 객체(Action - types)을 토대로 Reducer에서 로직 실행 후 변경된 값을 Store에 저장
4. Store : Store에 저장(변경)된 값을 View에 뿌려줌 (connect)