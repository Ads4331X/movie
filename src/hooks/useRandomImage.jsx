import { useState, useEffect } from "react";
import fetchImage from ".././api/fetchImage";

export function useRandomImage() {
  const [imgUrl, setImgUrl] = useState("");
  const [isloaded, seIsLoaded] = useState(false);

  useEffect(() => {
    let imageUrl;
    async function loadImg() {
      const response = await fetchImage();
      imageUrl = URL.createObjectURL(response.data);
      setImgUrl(imageUrl);
      seIsLoaded(true);
    }

    loadImg();

    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, []);

  return { imgUrl, isloaded };
}
