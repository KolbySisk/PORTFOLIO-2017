import WatchStuffSagas from '../containers/Stuff/sagas'
import WatchHomeSagas from '../containers/Home/sagas'

export default function* rootSaga(){
  yield [
    WatchStuffSagas(),
    WatchHomeSagas()
  ]
}