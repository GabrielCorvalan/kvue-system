const baseUrl = "https://jsonplaceholder.typicode.com";

function getPhotos() {
  return fetch(`${baseUrl}/photos?albumId=1`).then(res => res.json());
}

export default {
  getPhotos
};
