import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-5">
        React Redux Practice
      </h2>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Increment
        </button>
        <h1 className="mx-5 text-2xl">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
