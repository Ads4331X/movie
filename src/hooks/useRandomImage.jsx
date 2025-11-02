import { useState, useEffect } from "react";
import fetchImage from ".././api/fetchImage";

export function useRandomImage() {
  const [imgUrl, setImgUrl] = useState("");
  const [isloaded, seIsLoaded] = useState(false);

  useEffect(() => {
    async function loadImg() {
      const response = await fetchImage();
      const imageUrl = URL.createObjectURL(response.data);
      setImgUrl(imageUrl);
      seIsLoaded(true);
    }

    loadImg();
  }, []);

  return { imgUrl, isloaded };
}
