import {
  IMAGE_SELECTED,
  IMAGES_LOADED,
  IMAGE_LOAD_ERROR
} from '../actions';

const defaultState = {
  images: [],
  currentPage: 1,
  pages: 1
};

export default function imagesReducer(state = defaultState, action = { type: '' }) {
  switch (action.type) {

    case IMAGE_SELECTED:
      return {
        ...state,
        selectedImage: action.image
      };

    case IMAGES_LOADED:
      return {
        ...state,
        images: action.images,
        currentPage: action.currentPage,
        pages: action.pages
      };

    case IMAGE_LOAD_ERROR:
      return { ...state, images: [] };

    default:
      return state;
  }
}
