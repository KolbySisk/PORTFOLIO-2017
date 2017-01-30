import { takeEvery } from 'redux-saga/effects'
import { call, put } from 'redux-saga/effects'
import { getStuff } from './api/portfolio'

export function* loadStuff(){
  try{
    const response = yield call(getStuff)
    const stuff = response.data
    yield put({type: 'STUFF_RECEIVED', stuff})
  }
  catch(e){
    console.log(e)
  }
}

export function* watchLoadStuff(){
  yield takeEvery('LOAD_STUFF', loadStuff)
}

export default function* rootSaga(){
  yield [
    watchLoadStuff(),
  ]
}