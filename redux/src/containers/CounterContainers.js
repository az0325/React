import Counter from '../components/Counter';
import * as actions from '../actions';
import { connect } from 'react-redux';

// 13가지 색상 중 랜덤으로 선택하는 함수입니다
export function getRandomColor() {
    const colors = [
        '#495057',
        '#f03e3e',
        '#d6336c',
        '#ae3ec9',
        '#7048e8',
        '#4263eb',
        '#1c7cd6',
        '#1098ad',
        '#0ca678',
        '#37b24d',
        '#74b816',
        '#f59f00',
        '#f76707'
    ];

    // 0부터 12까지 랜덤 숫자
    const random = Math.floor(Math.random() * 13);

    // 랜덤 색상 반환
    return colors[random];
}

// store 안의 state 값을 props로 연결
const mapStateToProps = (state) => {
    console.log("Counter Containers : mapState")
    return ({
        // color: state.color,
        // number: state.number,
        color: state.colorData.color,
        number: state.numberData.number
    })
}

// 액션 생성 -> 액션을 dispatch하는 함수 생성
// store에 있는 state를 변경하기 위함
const mapDispatchToProps = (dispatch) => {
    console.log("Counter Containers : mapDispatch")
    return ({
        onIncrement: () => dispatch(actions.increment()),
        onDecrement: () => dispatch(actions.decrement()),
        onSetColor: () => {
            const color = getRandomColor();
            dispatch(actions.setColor(color));
        }
    })
}

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;