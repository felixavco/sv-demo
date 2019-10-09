import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "../commons/loader/Loader";
import ErrorBoundary from "../commons/errorPages/ErrorBoundary";
import { BrowserRouter, Switch } from "react-router-dom";
import store from "../../redux/store";
import { Provider } from "react-redux";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Switch>
              <Suspense fallback={<Loader fullPage={true} />}>
                {children}
              </Suspense>
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default Layout;
