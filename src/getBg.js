import { createApi } from "unsplash-js";

export default function getBg(cityInput) {
  const unsplash = createApi({
    accessKey: "qXXzrHNDEgE37EB4I_EXSp-kboWkltOK791dyke80bc",
  });

  unsplash.search.getPhotos({ query: cityInput }).then((response) => {
    console.log(response);
    const photo = response.response.results[0];
    const imageUrl = photo.urls.regular;
    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  });
}
