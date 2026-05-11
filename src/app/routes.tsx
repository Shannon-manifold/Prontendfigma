import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage";
import { BlogPage } from "./pages/BlogPage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { TutorialDetailPage } from "./pages/TutorialDetailPage";
import { QnAPage } from "./pages/QnAPage";
import { ProofsPage } from "./pages/ProofsPage";
import { ContributorsPage } from "./pages/ContributorsPage";
import { ChallengesPage } from "./pages/ChallengesPage";
import { DocsPage } from "./pages/DocsPage";
import { MyPage } from "./pages/MyPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ForgotPasswordPage } from "./pages/ForgotPasswordPage";
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
      { path: "contributors", Component: ContributorsPage },
      { path: "challenges", Component: ChallengesPage },
      { path: "docs", Component: DocsPage },
      { path: "mypage", Component: MyPage },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/tutorials/:tutorialId",
    Component: TutorialDetailPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/register",
    Component: RegisterPage,
  },
  {
    path: "/terms",
    Component: TermsPage,
  },
  {
    path: "/privacy",
    Component: PrivacyPage,
  },
  {
    path: "/forgot-password",
    Component: ForgotPasswordPage,
  },
]);
