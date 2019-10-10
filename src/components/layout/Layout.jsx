import React, { Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchModal from "./components/SearchModal";
import Loader from "../commons/loader/Loader";
import ErrorBoundary from "../commons/errorPages/ErrorBoundary";
import { BrowserRouter, Switch } from "react-router-dom";
import store from "../../redux/store";
import { Provider } from "react-redux";
import { HotKeys } from "react-hotkeys";
import { CHANGE_SEARCH_MODAL_STATE } from "../../redux/types";

const keyMap = {
  OPEN_MODAL_SEARCH: "ctrl+b"
};

const Layout = ({ children }) => {
  const handlers = {
    OPEN_MODAL_SEARCH: () => {
      console.log(store);
      console.log(Provider)
      store.dispatch({
        type: CHANGE_SEARCH_MODAL_STATE,
        payload: true
      });
    }
  };

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <HotKeys keyMap={keyMap} handlers={handlers}>
            <Navbar />
            <div className="container">
              <Switch>
                <Suspense fallback={<Loader fullPage={true} />}>
                  {children}
                </Suspense>
              </Switch>
            </div>
            <Footer />
          </HotKeys>
          <SearchModal />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  );
};

export default Layout;
