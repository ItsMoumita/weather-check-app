import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layouts/MainLayout";
import About from "./pages/About";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: "true",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      }
    ]
  }
]);
function Router() {

  return (
    <RouterProvider router={router} />
  )
}

export default Router
