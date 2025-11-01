import { createBrowserRouter, RouterProvider } from "react-router-dom";

import {
  Layout,
  ErrorPage,
  About,
  Home,
  TermsConditions,
  ContactUsPage,
} from "@/routes";
import FAQPage from "./routes/faq";
import gsap from "gsap";

const gsapLoader = () => {
  return gsap.to(".content", { opacity: 0, x: 300, duration: 0.3 });
};

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
        loader: gsapLoader,
      },
      {
        element: <About />,
        path: "/about",
        loader: gsapLoader,
      },
      {
        element: <ContactUsPage />,
        path: "/contact",
        loader: gsapLoader,
      },
      {
        element: <TermsConditions />,
        path: "/tos",
        loader: gsapLoader,
      },
      {
        element: <FAQPage />,
        path: "/faq",
        loader: gsapLoader,
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
