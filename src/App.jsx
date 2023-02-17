import router from "./components/router";
import { RouterProvider } from "react-router-dom";
import Navbar from "./components/common/navbar";
import Footer from "./components/common/footer";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </>
  );
}

export default App;
