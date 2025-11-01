import axios from "axios";
import { useEffect, useState } from "react";

export function useRandomImage() {
  const access_key = "mrFwbIKASt9jtRX6Aso1mX4FG4K2UcYgeSSd3cv2Kj8";
  const secret_key = "HPpIKkUEbVKD-NVeEhgY1LoXnRIxeXfcNd4xPHqOh7g";
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.unsplash.com/photos/random?client_id=${access_key}`)
      .then((response) => {
        setImgUrl(response.data.urls.regular);
        console.log(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return { imgUrl };
}
