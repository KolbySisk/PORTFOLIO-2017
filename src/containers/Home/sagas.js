import { takeEvery, call, put } from 'redux-saga/effects'
import { postContactForm } from '../../api/portfolio'
import { CONTACT_FORM_SUBMITTED, CONTACT_FORM_POSTED } from './constants'

export function* postContactFormSaga(action){
  try{
    const response = yield call(postContactForm, action.payload)
    const status = response.status
    yield put({type: CONTACT_FORM_POSTED, status})
  }
  catch(e){
    console.log(e)
  }
}

export default function* watchPostContactForm(){
  yield takeEvery(CONTACT_FORM_SUBMITTED, postContactFormSaga)
}