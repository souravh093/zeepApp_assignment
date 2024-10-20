import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Root from "../layout/Root";
import Wishlist from "../Wishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
    ],
  },
]);


export default router;