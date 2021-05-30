import { Counter } from "./components/Counter"
import { CounterConHook } from "./components/CounterConHook"
import { Login } from "./components/Login"
import { Users } from "./components/Users"
import { BasicTypes } from "./typescript/BasicTypes"
import { Functions } from "./typescript/Functions"
import { LiteralObjects } from "./typescript/LiteralObjects"

const App = () => {

  return (
    <div className="mt-2">
     <h1>Intro a typescript React</h1> 
     <hr/>
     {/* <BasicTypes />
     <LiteralObjects />
     <Functions /> */}
     {/* <Counter /> */}
     {/* <CounterConHook /> */}
     {/* <Login /> */}
     <Users />
    </div>
  )
}

export default App;