export const LOAD_IMAGES = 'gallery.loadImages';
export const IMAGE_SELECTED = 'gallery.imageSelected';
export const IMAGES_LOADED = 'gallery.imagesLoaded';
export const IMAGE_LOAD_ERROR = 'gallery.imageLoadError';

export function selectImage(image) {
  const type = IMAGE_SELECTED;
  return { type, image };
}

export function loadImages(currentPage = 1) {
  const type = LOAD_IMAGES;
  return { type, currentPage };
}
