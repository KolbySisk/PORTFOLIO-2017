import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  return {
    ...createStore(reducers,
      applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga)
  }
}

export default configureStore