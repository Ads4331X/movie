import axios from "axios";

export const fetch = axios
  .get("https://api.nekosapi.com/v4/images/random")
  .then((res) => console.log(res.data));
