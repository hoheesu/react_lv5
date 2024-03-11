import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import GlobalStyle from "./styles/globalStyles";
import StateModalPortal from "./portal/StateModalPortal";
import Header from "./components/layout/Header";

function App() {
  const errorModal = useSelector((state) => state.modalState.isModal);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Outlet />
      {errorModal ? <StateModalPortal /> : null}
    </>
  );
}

export default App;
