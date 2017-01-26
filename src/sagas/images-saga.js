import { put, take, fork } from 'redux-saga/effects';
import { fetchImages } from '../services/flickr';
import { loadPixel } from '../services/pixel';
import { LOAD_IMAGES, IMAGE_SELECTED, IMAGES_LOADED, IMAGE_LOAD_ERROR } from '../actions';

export function* loadImagesListener() {
  let continueLoop = true;
  while (continueLoop) {
    const loadImageAction = yield take(LOAD_IMAGES);
    try {
      const response = yield fetchImages(loadImageAction.currentPage);
      const { images, currentPage, pages } = response;
      yield put({ type: IMAGES_LOADED, images, currentPage, pages });
      yield put({ type: IMAGE_SELECTED, image: response.images[0] });
    } catch (err) {
      continueLoop = false;
      yield put({ type: IMAGE_LOAD_ERROR, err });
    }
  }
}

export function* selectImageListener() {
  let continueLoop = true;
  while (continueLoop) {
    try {
      yield take(IMAGE_SELECTED);
      yield fork(loadPixel);
    } catch (err) {
      continueLoop = false;
      yield put({ type: IMAGE_LOAD_ERROR, err });
    }
  }
}
