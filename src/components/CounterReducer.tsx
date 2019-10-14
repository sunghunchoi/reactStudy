import React, {useReducer} from "react";

// 이렇게 액션을 | 으로 연달아서
type Action = {type:'INCREASE'} | {type:'DECREASE'}

// state의 타입과 함수의 리턴 타입이 동일하지요? 리듀서를 만들 땐 이렇게 파라미터로 받아오는 상태의 타입과 함수가 리턴하는 타입을 동일하게 하는 것이 매우 중요
function reducer(state:number, action: Action): number{
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        default:
            throw new Error('Unhandled action');
    }
}

function CounterReducer() {

    const [count, dispatch] = useReducer(reducer,0);
    const onIncrease = () => dispatch({type: 'INCREASE'});
    const onDecrease = () => dispatch({type: 'DECREASE'});

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}> +1 </button>
                <button onClick={onDecrease}> -1 </button>
            </div>
        </div>
    );
}

export default CounterReducer;