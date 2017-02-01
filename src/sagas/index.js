import StuffSaga from '../containers/Stuff/saga'

export default function* rootSaga(){
  yield [
    StuffSaga(),
  ]
}