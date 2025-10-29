 import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Layout,
  ErrorPage,
  About,
  Home,
  Contact,
  TermsConditions,
} from "@/routes";

const router = createBrowserRouter([
  {
    // MAIN LAYOUT
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,

    children: [
      {
        element: <Home />,
        path: "/",
        index: true,
        id: "Home",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <Contact />,
        path: "/contact",
      },
      {
        element: <TermsConditions />,
        path: "/tos",
      },
    ],
  },
]);
// export function App2() {
//   return <RouterProvider router={router} />;

// }


export function App() {
  return <RouterProvider router={router} />;

}

export default App;
