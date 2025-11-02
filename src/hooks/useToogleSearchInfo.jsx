import { useState } from "react";

export function useToogleSearchInfo() {
  const [showSearchDetails, setShowSearchDetails] = useState(false);

  const Toogle = () => setShowSearchDetails(!showSearchDetails);
  return { showSearchDetails, Toogle };
}
