import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const WebServicespage = React.lazy(() => import("pages/WebServicespage"));
const Digitalmarketingprojects = React.lazy(() =>
  import("pages/Digitalmarketingprojects")
);
const Projectspage = React.lazy(() => import("pages/Projectspage"));
const DesktopFour = React.lazy(() => import("pages/DesktopFour"));
const DesktopThree = React.lazy(() => import("pages/DesktopThree"));
const DesktopTwo = React.lazy(() => import("pages/DesktopTwo"));
const DesktopOne = React.lazy(() => import("pages/DesktopOne"));
const BlogsListpage = React.lazy(() => import("pages/BlogsListpage"));
const BlogPostpage = React.lazy(() => import("pages/BlogPostpage"));
const Blogpage = React.lazy(() => import("pages/Blogpage"));
const ContactUspage = React.lazy(() => import("pages/ContactUspage"));
const AboutUspage = React.lazy(() => import("pages/AboutUspage"));
const DigitalmarketingServicespage = React.lazy(() =>
  import("pages/DigitalmarketingServicespage")
);
const DigitalMarketingPage = React.lazy(() =>
  import("pages/DigitalMarketingPage")
);
const Webdevpage = React.lazy(() => import("pages/Webdevpage"));
const HeadHuntingPage = React.lazy(() => import("pages/HeadHuntingPage"));
const OutsourcingPage = React.lazy(() => import("pages/OutsourcingPage"));
const HomeScreen = React.lazy(() => import("pages/HomeScreen"));
const Get50 = React.lazy(() => import("pages/Get50"));
const DoneSubmit = React.lazy(() => import("pages/DoneSubmit"));
const AnimationStart = React.lazy(() => import("pages/AnimationStart"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<AnimationStart />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/donesubmit" element={<DoneSubmit />} />
          <Route path="/get50" element={<Get50 />} />
          <Route path="/homescreen" element={<HomeScreen />} />
          <Route path="/outsourcingpage" element={<OutsourcingPage />} />
          <Route path="/headhuntingpage" element={<HeadHuntingPage />} />
          <Route path="/webdevpage" element={<Webdevpage />} />
          <Route
            path="/digitalmarketingpage"
            element={<DigitalMarketingPage />}
          />
          <Route
            path="/digitalmarketingservicespage"
            element={<DigitalmarketingServicespage />}
          />
          <Route path="/aboutuspage" element={<AboutUspage />} />
          <Route path="/contactuspage" element={<ContactUspage />} />
          <Route path="/blogpage" element={<Blogpage />} />
          <Route path="/blogpostpage" element={<BlogPostpage />} />
          <Route path="/blogslistpage" element={<BlogsListpage />} />
          <Route path="/desktopone" element={<DesktopOne />} />
          <Route path="/desktoptwo" element={<DesktopTwo />} />
          <Route path="/desktopthree" element={<DesktopThree />} />
          <Route path="/desktopfour" element={<DesktopFour />} />
          <Route path="/projectspage" element={<Projectspage />} />
          <Route
            path="/digitalmarketingprojects"
            element={<Digitalmarketingprojects />}
          />
          <Route path="/webservicespage" element={<WebServicespage />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
