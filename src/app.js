import { AppContainer } from "react-hot-loader";
import React from "react";
import { render } from "react-dom";
import configureStore from "./store";
import { Provider } from "react-redux";
import ApplicationContainer from "./containers/app/app-container";
import { Auth0Provider } from "@auth0/auth0-react";

const store = configureStore();

const component = Root =>
  render(
    <Auth0Provider domain="" clientId="" redirectUri={window.location.origin}>
      <AppContainer>
        <Provider store={store}>
          <Root />
        </Provider>
      </AppContainer>
    </Auth0Provider>,
    document.getElementById("root")
  );

component(ApplicationContainer);

if (module.hot) {
  module.hot.accept("./containers/app/app-container.js", () => {
    component(ApplicationContainer);
  });
}
