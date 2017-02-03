import { takeEvery, call, put } from 'redux-saga/effects'
import { postContactForm } from '../../api/portfolio'
import {
  CONTACT_FORM_SUBMITTED,
  CONTACT_FORM_POSTED,
  CONTACT_FORM_FAILED
}
from './constants'

export function* postContactFormSaga(action){
  try{
    const response = yield call(postContactForm, action.payload)
    const status = response.status
    yield put({type: CONTACT_FORM_POSTED, status})
    yield put({type: 'NOTIFICATION_BROADCASTED', payload: {message:'Email successfully sent', time: 2, status: 1}})
  }
  catch(e){
    console.log(e)
    yield put({type: CONTACT_FORM_FAILED, status})
    yield put({type: 'NOTIFICATION_BROADCASTED', payload: {message:'Form could not be submitted', time: 2, status: 2}})
  }
}

export default function* watchPostContactForm(){
  yield takeEvery(CONTACT_FORM_SUBMITTED, postContactFormSaga)
}