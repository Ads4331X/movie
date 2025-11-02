import { createContext, useContext } from "react";
import { useToogleSearchInfo } from "../hooks/useToogleSearchInfo";

const SearchContext = createContext();

export function SearchProvider({ children }) {
  const { showSearchDetails, Toogle } = useToogleSearchInfo();
  return (
    <SearchContext.Provider value={{ showSearchDetails, Toogle }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearchContext must be used within SearchProvider");
  }
  return context;
}
