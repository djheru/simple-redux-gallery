import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

import styles from './gallery.css';

export class Gallery extends Component {

  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, selectedImage, currentPage, pages, selectImage, loadImages } = this.props;
    const nextPage = (currentPage < pages) ? currentPage + 1 : 1;
    const previousPage = (currentPage === 1) ? pages : currentPage - 1;
    return (
      <div className={styles.imageGallery}>
        <div className={styles.galleryImage}>
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div className={styles.imageScroller}>
          {
            images.map((image, index) => (
              <div key={index} onClick={() => selectImage(image)}>
                <img src={image} />
              </div>
            ))
          }
        </div>
        <div className={styles.imageScroller}>
          <button onClick={() => loadImages(previousPage)}>Previous Page</button>
          <button onClick={() => loadImages(nextPage)}>Next Page</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    images: state.imagesReducer.images,
    selectedImage: state.imagesReducer.selectedImage,
    currentPage: state.imagesReducer.currentPage,
    pages: state.imagesReducer.pages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
