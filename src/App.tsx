import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import { RootLayout } from "@/components/layout/root-layout";
import HomePage from "@/pages/home-page";

const AboutPage = lazy(() => import("@/pages/about-page"));
const ProjectsPage = lazy(() => import("@/pages/projects-page"));
const ProjectDetailPage = lazy(() => import("@/pages/project-detail-page"));
const ContactPage = lazy(() => import("@/pages/contact-page"));
const NotFoundPage = lazy(() => import("@/pages/not-found-page"));

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:slug" element={<ProjectDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
