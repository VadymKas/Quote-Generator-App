import QuoteGenerator from './components/quoteGenerator';
import { ThemeProvider } from "@mui/material";
import theme from "./styles";


function App() {
  return (
    <ThemeProvider theme={theme}>
      <QuoteGenerator />
    </ThemeProvider>
  );
}

export default App;
