import React from 'react';

type GreetingsProps = {
    name : string;
    mark: string;
    // 옵셔널을 프롭스로 전달받기
    optional?: string;
    // 함수 전달 받기.
    onClick : (name: string) => void;
};

// const Greetings = ({name, mark}: GreetingsProps) => (
//   <div>
//       Hello {name} {mark}
//   </div>
// );

function Greetings({name,mark,optional,onClick}:GreetingsProps) {
    const handleClick = () => onClick(name)
    return (
        <div>
            Hello {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    );
}

Greetings.defaultProps = {
    mark: '!'
}


export default Greetings;