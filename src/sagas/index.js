import { loadImagesListener, selectImageListener } from './images-saga';

export default function* rootSaga() {
  yield [
    loadImagesListener(),
    selectImageListener()
  ];
}
