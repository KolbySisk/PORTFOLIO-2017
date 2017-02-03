import WatchStuffSagas from '../containers/Stuff/sagas'
import WatchHomeSagas from '../containers/ContactForm/sagas'

export default function* rootSaga(){
  yield [
    WatchStuffSagas(),
    WatchHomeSagas()
  ]
}