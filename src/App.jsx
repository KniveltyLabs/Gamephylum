import "./App.less";
import Router from "./router";
import Frame from "./components/Frame/index";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Frame>
        <Router />
      </Frame>
    </BrowserRouter>
  );
}

export default App;
