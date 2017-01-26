const API_KEY = '9d4214a20471f719de5ed2430c5e4709';

export const fetchImages = (page = 1) => {
  const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&page=${page}&per_page=5`;
  return fetch(API_ENDPOINT)
    .then(response =>
      response.json().then((json) => {
        const images = json.photos.photo.map(({ farm, server, id, secret }) =>
          `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
        );
        const currentPage = json.photos.page;
        const pages = json.photos.pages;
        return { images, currentPage, pages };
      })
    );
};
