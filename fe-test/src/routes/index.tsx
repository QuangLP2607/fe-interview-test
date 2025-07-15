import type { ReactNode, ReactElement } from "react";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import Profile from "../pages/Profile";

export interface RouteType {
  path: string;
  component: () => ReactElement;
  layout?: ((props: { children: ReactNode }) => ReactElement) | null;
  layoutProps?: {
    showHeader?: boolean;
    showSidebar?: boolean;
    showFooter?: boolean;
  };
}

const publicRoutes: RouteType[] = [
  {
    path: "/",
    component: Home,
    layoutProps: { showSidebar: false },
  },
  { path: "/signin", component: SignIn, layout: null },
  {
    path: "/profile",
    component: Profile,
    layoutProps: { showFooter: false, showHeader: false },
  },
];

const privateRoutes: RouteType[] = [];

export { publicRoutes, privateRoutes };
