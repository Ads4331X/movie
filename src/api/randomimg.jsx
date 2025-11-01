import { useEffect, useState } from "react";
import axios from "axios";

export function useRandomImage() {
  const [imgUrl, setImgUrl] = useState("");
  const [isloaded, seIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchImage() {
      try {
        const response = await axios.get("https://picsum.photos/800/600", {
          responseType: "blob",
        });
        const imageUrl = URL.createObjectURL(response.data);
        setImgUrl(imageUrl);
        seIsLoaded(true);
      } catch (err) {
        console.error("Error fetching image:", err);
      }
    }
    fetchImage();
  }, []);

  return { imgUrl, isloaded };
}
