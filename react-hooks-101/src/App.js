import React, { useState, useEffect } from "react";

const App = (props) => {
  // const initialStates = {
  //   name: "",
  //   price: 1000,
  // };
  const [state, setState] = useState(props);
  const { name, price } = state

  // 変更のたびに呼ばれる
  useEffect(() => {
    console.log("This is like componentDidMount or componentDidUpdate")
  })

  // 最初の１回のみ呼ばれる
  useEffect(() => {
    console.log("This is like componentDidMount")
  }, [])

  // 指定の要素に限定した変更のたびに呼ばれる
  useEffect(() => {
    console.log("This callback is for name only")
  }, [name])

  return (
    <>
      <p>
        現在の{name}は、{price}円です。
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};
App.defaultProps = {
  name: "",
  price: 1000
}


export default App;
