

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Layout, ErrorPage, About, Home, Contact, TermsConditions } from "@/routes";




const router = createBrowserRouter([
  {
    // MAIN LAYOUT
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <About />,
      },
      {
        element: <Contact />,
      },
      {
        element: <TermsConditions />,
      }
    ],
  },
]);

export function App() {
  return <RouterProvider router={router} />;
}










export default App;