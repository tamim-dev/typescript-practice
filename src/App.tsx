import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./pages/Result";
import ShowResult from "./pages/ShowResult";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Result />,
    },
    {
      path: "/showresult",
      element: <ShowResult />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
