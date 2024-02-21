import React, { Suspense } from "react";

const LazyNavbar = React.lazy(() => import("../components/Navbar"));
const LazyHero = React.lazy(() => import("../components/Hero"));
const LazyFilter = React.lazy(() => import("../components/Filter"));
const LazyCard = React.lazy(() => import("../components/Card"));
const LazyFooter = React.lazy(() => import("../components/Footer"));

const Home = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyNavbar />
        <LazyHero />
        <LazyFilter />
        <LazyCard />
        <LazyFooter />
      </Suspense>
    </>
  );
};

export default Home;
