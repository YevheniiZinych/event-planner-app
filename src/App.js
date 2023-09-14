import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { GlobalStyle } from "./components/GlobalStyle";
import { mainTheme } from "./utils/theme";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import EventDetails from "./pages/Details/EventDetails";
import { Container } from "./App.styled";
import { AddEvent } from "./pages/AddEvent/AddEvent";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Container>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<HomePage />} />
              <Route path="/add-event" element={<AddEvent />} />
              <Route path="/details/:id" element={<EventDetails />} />
            </Route>
          </Routes>
        </LocalizationProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
