import "./App.scss";
import Main from "./Layout/Main/Main";
import Footer from "./Layout/Footer/Footer";
import { ThemeProvider } from "./context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <Main />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
