import axios from "axios";

export default async function fetchImage() {
  try {
    const response = await axios.get("https://picsum.photos/800/600", {
      responseType: "blob",
    });
    return response;
  } catch (err) {
    console.error("Error fetching image:", err);
    return null;
  }
}
