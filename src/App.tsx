import React from 'react';
import './App.css';
import Greetings from "./components/Greetings";
import Counter from "./components/Counter";
import MyForm from "./components/MyForm";
import CounterReducer from "./components/CounterReducer";
import ReducerSample from "./components/ReducerSample";

type ContentProps = {
  name: string;
}

const App: React.FC<ContentProps> = (props) => {
  const onClick = (name:string) => {
    console.log(`${name} says hello`);
  }

  const onSubmit = (form: {name: string; description: string}) => {
      console.log(form)
  }

  return (
      <div>
        <h1>Hello! {props.name}</h1>
        <Greetings name="Show" optional='dododo!' onClick={onClick}/>
        <Counter/>
        <MyForm onSubmit={onSubmit}/>
        <CounterReducer/>
        <ReducerSample/>
      </div>
  );
}

export default App;
