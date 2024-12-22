import './App.css'
import Counter from './Counter'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <Counter heading="Counter 1" />
    </Provider>
  )
}

export default App
