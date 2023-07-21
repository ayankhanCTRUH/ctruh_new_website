import style from "./App.module.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import AboutUs from "./AboutUs/AboutUs";
import { Suspense } from "react";
import Footer from "./LandingPage/2dElements/Footer/Footer";
import Header from "./LandingPage/2dElements/Header/Header";
import Blogs from "./Blogs/Blogs";
import BottomSection from "./components/BottomSection/BottomSection";
import ContactUs from "./ContactUs/ContactUs";
import BlogsPage from "./Blogs/Components/BlogsPage/BlogsPage";
import Applications from "./Applications/Applications";
import Loader from "./components/Loader/Loader";

function App() {
  const routeConfig = [
    { path: "/", element: <LandingPage /> },
    { path: "/about_us", element: <AboutUs /> },
    { path: "/blogs", element: <Blogs /> },
    { path: "/contact_us", element: <ContactUs /> },
    {
      path: "/blogs/:blogTitle",
      element: <BlogsPage />,
    },
    {
      path: "/application",
      element: <Applications />,
    },
  ];

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Header />
        <Routes>
          {routeConfig.map((route, index) => (
            <Route
              key={index}
              path={route?.path}
              element={route?.element}
              title={route?.title}
            >
              {route?.children?.map((child, index) => (
                <Route
                  key={index}
                  path={child?.path}
                  element={child?.element}
                />
              ))}
            </Route>
          ))}
        </Routes>
        <BottomSection />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
