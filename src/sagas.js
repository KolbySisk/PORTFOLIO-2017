import { fork } from 'redux-saga/effects'
import { takeEvery } from 'redux-saga'
import { call, put } from 'redux-saga/effects'

import axios from 'axios'
//import watchSearchMedia from './watchers'

export function GetStuff(){
  try{
    //const response = yield call(axios.get, 'http://localhost:57144/api/stuff')
  }
  catch(e){
    console.log(e)
  }
}

export function* watchGetStuff(){
  console.log('yo')
  //yield.takeEvery('GET_STUFF', GetStuff)
}


export default function* rootSaga(){
  //yield fork()
  // yield [
  //   watchGetStuff(),
  // ]
}