import { useDispatch, useSelector } from "react-redux";

function Counter({heading}) {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()

  return (
    <>
      <h1>{heading}</h1>
      <h1>{count}</h1>
      <button onClick={()=> dispatch({type: 'INCREMENT', payload: 5})}>Increment</button>
    </>
  )
}

export default Counter;