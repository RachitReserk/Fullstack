import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './App'
import reducer , {manage} from './reducers/anecdoteReducer'
import filterReducer , { filterChange } from './reducers/filterReducer'

const store = configureStore({
  reducer:{
    anecdote: reducer,
    filter: filterReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)