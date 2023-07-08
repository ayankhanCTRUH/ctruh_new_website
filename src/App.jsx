import style from "./App.module.css";
import { Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import AboutUs from "./AboutUs/AboutUs";
import { Suspense } from "react";
import Footer from "./LandingPage/2dElements/Footer/Footer";
import Header from "./LandingPage/2dElements/Header/Header";
import Blogs from "./Blogs/Blogs";

function App() {
  const routeConfig = [
    { path: "/", element: <LandingPage /> },
    { path: "/about_us", element: <AboutUs /> },
    { path: "/blogs", element: <Blogs /> },
  ];

  return (
    <Suspense fallback={null}>
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
              <Route key={index} path={child?.path} element={child?.element} />
            ))}
          </Route>
        ))}
      </Routes>
      <Footer />
    </Suspense>
  );
}

export default App;
