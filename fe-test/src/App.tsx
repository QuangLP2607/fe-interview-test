import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./Layout";
import { publicRoutes } from "./routes";
import type { RouteType } from "./routes";
import type { ReactNode } from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // hoặc true nếu chỉ muốn chạy 1 lần
      offset: 120, // khoảng cách trước khi kích hoạt
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {publicRoutes.map((route: RouteType, index: number) => {
            const Page = route.component;
            const layoutProps = route.layoutProps ?? {};

            let Layout = ({ children }: { children: ReactNode }) => (
              <DefaultLayout {...layoutProps}>{children}</DefaultLayout>
            );

            if (route.layout === null) {
              Layout = ({ children }) => <>{children}</>;
            } else if (route.layout) {
              const CustomLayout = route.layout;
              Layout = ({ children }) => (
                <CustomLayout {...layoutProps}>{children}</CustomLayout>
              );
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
