import React, { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
    return {
        ...state,
        [action.name]: action.value
    }
}

const Info = () => {
    // const [name, setName] = useState('');
    // const [nickname, setNickname] = useState('');
    // useEffect(() => {
    // console.log('렌더링이 완료되었습니다!');
    // });

    // useEffect(() => {
    //     console.log(name)
    // }, [name]);


    // const onChangeName = e => {
    //     setName(e.target.value);
    // };

    // const onChangeNickname = e => {
    //     setNickname(e.target.value);
    // };

    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    })
    const { name, nickname } = state;

    const onChange = e => {
        dispatch(e.target)
    }

    return (
        <div>
            <div>
                {/* <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} /> */}
                {/* name=""라고 name 명시해야함! */}
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임: </b>
                    {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;