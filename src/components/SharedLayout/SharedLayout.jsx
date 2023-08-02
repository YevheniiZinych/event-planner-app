import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./SharedLayout.styled";
import { Header } from "../Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Container>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
