import { Home } from "./views/Home.js";

export const routes = {
  "/": {
    linkLabel: "home",
    view: Home,
  },
};

const app = document.querySelector("#app");
const nav = document.querySelector("#nav");

// function to create new nav item

export const renderNavLinks = () => {
  const navFragment = document.createDocumentFragment();
  Object.keys(routes).forEach((route) => {
    const { linkLabel } = routes[route];

    const linkElement = document.createElement("a");
    linkElement.href = route;
    linkElement.textContent = linkLabel;
    linkElement.className = "nav-link";
    navFragment.appendChild(linkElement);
  });

  nav.append(navFragment);
};

// function to register click handlers
export const registerNavLinks = () => {
  nav.addEventListener("click", (e) => {
    if (e.target.matches(".nav-link")) {
      e.preventDefault();
      navigate(e);
    }
  });
};

const renderContent = (route) => {
  const routeConfig = routes[route];
  if (routeConfig) {
    app.innerHTML = routeConfig.view();
  }
};

export const navigate = (e) => {
  const route = e.target.pathname;
  history.pushState({}, "", route);
  renderContent(route);
};

export const registerBrowserBackAndForth = () => {
  window.onpopstate = function () {
    const route = location.pathname;
    renderContent(route);
  };
};

export const renderInitialPage = () => {
  const route = location.pathname;
  renderContent(route);
};
