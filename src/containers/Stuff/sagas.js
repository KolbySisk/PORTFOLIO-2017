import { takeEvery, call, put } from 'redux-saga/effects'
import { getStuff } from '../../api/portfolio'
import { LOAD_STUFF, STUFF_RECEIVED } from './constants'

export function* getStuffSaga(){
  try{
    const response = yield call(getStuff)
    const stuff = response.data
    yield put({type: STUFF_RECEIVED, stuff})
  }
  catch(e){
    console.log(e)
  }
}

export default function* watchLoadStuff(){
  yield takeEvery(LOAD_STUFF, getStuffSaga)
}