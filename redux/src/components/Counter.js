import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

// class Counter extends Component {

//     render() {
//         let { onIncrement, onDecrement, onSetColor, color, number } = this.props;

//         return (
//             <div className="Counter"
//                 onClick={onIncrement}
//                 onContextMenu={(e) => {
//                     e.preventDefault();
//                     onDecrement();
//                 }}
//                 onDoubleClick={onSetColor}
//                 style={{ backgroundColor: color }}
//             > {number}
//             </div>
//         )
//     }
// }

// // 함수형으로 변경
// function Counter(props) {
//     return (
//         <div className="Counter"
//             onClick={props.onIncrement}
//             onContextMenu={(e) => {
//                 e.preventDefault();
//                 props.onDecrement();
//             }}
//             onDoubleClick={props.onSetColor}
//             style={{ backgroundColor: props.color }}
//         > {props.number}
//         </div>
//     )
// }

// 화살표 함수 + 비구조화 할당
const Counter = ({ onIncrement, onDecrement, onSetColor, color, number }) => {
    return (
        <div className="Counter"
            onClick={onIncrement}
            onContextMenu={(e) => {
                e.preventDefault();
                onDecrement();
            }}
            onDoubleClick={onSetColor}
            style={{ backgroundColor: color }}
        > {number}
        </div>
    )
}

// props 타입 확인
Counter.propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
}

// props 기본값 설정 (값이 없을 경우)
Counter.defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.log('onIncrement not Defined'),
    onDecrement: () => console.log('onDecrement not Defined'),
    onSetColor: () => console.log('onSetColor not Defined'),
};

export default Counter;