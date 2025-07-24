import Login from "./Login";
import Browse from "./Browse";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <>
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
};

export default Body;
