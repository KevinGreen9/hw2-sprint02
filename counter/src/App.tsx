import './App.css'
import {MyCounter} from "./components/MyCounter";
import {MyCounterWithRedux} from "./components/MyCounterWithRedux/MyCounterWithRedux";

function App() {

  return (
    <>
      {/*<MyCounter />*/}
        <MyCounterWithRedux/>
    </>
  )
}

export default App
