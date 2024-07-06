import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Result from "./pages/Result";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Result />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
