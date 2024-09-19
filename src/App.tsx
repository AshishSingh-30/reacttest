import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import { Certificate, Home, Leadstable } from "./pages/pageIndex";
import { useEffect } from "react";

function App() {
  const isLoggedIn = true;

  const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return (
      <div className="">
        <div className="">
          <Outlet />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home isLoggedIn={isLoggedIn} />,
        },
        {
          path: "/leads/:mainchart/:drilldown",
          element: <Leadstable />,
        },{
          path: "/certificate",
          element: <Certificate />
        }
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
