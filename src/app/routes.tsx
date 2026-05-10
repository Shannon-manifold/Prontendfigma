import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { TutorialDetailPage } from "./pages/TutorialDetailPage";
import { QnAPage } from "./pages/QnAPage";
import { ProofsPage } from "./pages/ProofsPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "blog", Component: BlogPage },
      { path: "tutorials", Component: TutorialsPage },
      { path: "qna", Component: QnAPage },
      { path: "proofs", Component: ProofsPage },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/tutorials/:tutorialId",
    Component: TutorialDetailPage,
  },
]);
