import axios from "axios";

const apiKey = "a61ace99b556abcd2ab005fa3b93ae87";

const flickrAPI = axios.create({
  baseURL: "https://api.flickr.com/services/rest/",
  params: {
    api_key: apiKey,
    format: "json",
    nojsoncallback: 1,
  },
});

export const searchPhotos = async ({ searchTerm, category }) => {
  const response = await flickrAPI.get("", {
    params: {
      method: "flickr.photos.search",
      text: searchTerm,
      tags: category,
    },
  });

  return response.data.photos.photo.map((photo) => ({
    id: photo.id,
    title: photo.title,
    url: `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`,
  }));
};
