import { takeEvery, call, put } from 'redux-saga/effects'
import { getStats } from '../../api/portfolio'
import { LOAD_STATS, STATS_RECEIVED } from './constants'
import { prepStats } from './utility'

export function* getStatsSaga(action){
  try{
    const response = yield call(getStats)
    const stats = response.data
    prepStats(stats)
    action.payload.initStats(stats)
    yield put({type: STATS_RECEIVED, stats})
  }
  catch(e){
    console.log(e)
  }
}

export default function* watchLoadStats(){
  yield takeEvery(LOAD_STATS, getStatsSaga)
}