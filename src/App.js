import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/GlobalStyle";
import { mainTheme } from "./utils/theme";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import { Container } from "./App.styled";
function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
