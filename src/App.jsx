import HomePage from "./components/Home/HomePage";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
