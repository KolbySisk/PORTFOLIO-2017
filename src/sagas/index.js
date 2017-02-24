import WatchStuffSagas from '../containers/Stuff/sagas'
import WatchHomeSagas from '../containers/ContactForm/sagas'
import WatchStatsSagas from '../containers/Stats/sagas'

export default function* rootSaga(){
  yield [
    WatchStuffSagas(),
    WatchHomeSagas(),
    WatchStatsSagas()
  ]
}