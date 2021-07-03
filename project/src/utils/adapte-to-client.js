import { deepClone } from './common';

export default function adaptedToClient(hostel) {
  let adaptedHostel = deepClone(hostel);
  adaptedHostel = {

    ...adaptedHostel,
    city: {
      ...hostel.city,
      location: {
        lat: hostel.city.location.latitude,
        lng: hostel.city.location.longitude,
        zoom: hostel.city.location.zoom,
      },
    },
    host: {
      ...hostel.host,
      avatarUrl: hostel.host.avatar_url,
      isPro: hostel.host.is_pro,
    },
    isFavorite: hostel.is_favorite,
    isPremium: hostel.is_premium,
    location: {
      ...hostel.location,
      lat: hostel.location.latitude,
      lng: hostel.location.longitude,
    },
    maxAdults: hostel.max_adults,
    previewImage: hostel.preview_image,
  };

  delete adaptedHostel.city.location.latitude;
  delete adaptedHostel.city.location.longitude;
  delete adaptedHostel.host.avatar_url;
  delete adaptedHostel.host.is_pro;
  delete adaptedHostel.is_favorite;
  delete adaptedHostel.is_premium;
  delete adaptedHostel.location.latitude;
  delete adaptedHostel.location.longitude;
  delete adaptedHostel.max_adults;
  delete adaptedHostel.preview_image;

  return adaptedHostel;
}

export const reviewAdaptedToClient = (review) => {
  let adaptedReview = deepClone(review);
  adaptedReview = {
    ...adaptedReview,
    user: {
      ...adaptedReview.user,
      avatarUrl: adaptedReview.user.avatar_url,
      isPro: adaptedReview.user.is_pro,
    },
  };

  delete adaptedReview.user.is_pro;
  delete adaptedReview.user.avatar_url;

  return adaptedReview;
};
