import React, {useState} from "react";

function Counter() {
    // const [count, setCount] = useState<number>(0);
    // 자동으로 타입을 유추하기때문에 .. ㄱㅊ?
    // 제네릭을 사용하는 경우.

    // 1. 상태가 null 일수도 있고 아닐 수도 있을때
    // type Information = { name:string; description: string };
    // const [info, setInformation ] = useState<Information | null > (null) ;

    // 2. 상태의 타입이 까다로운 구조를 가진 객체이거나 배열일때
    // type TodoList = { id:number; text: string; done: boolean };
    // const [todoList, setTodoList] = useSate<[] as TodoList[]>([]);

    const [count, setCount] = useState(0)
    const onIncrease = () => setCount(count + 1);
    const onDecrease = () => setCount(count - 1);
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
export default Counter;