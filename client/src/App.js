import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import ProtectedExamplePage from "./components/ProtectedExamplePage";
import { ProvideAuth } from "./util/authContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Tetris from "./components/Tetris";

function App() {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <Route exact path="/">
            <Tetris />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/signup">
            <SignupPage />
          </Route>
          <ProtectedRoute path="/protected/example">
            <ProtectedExamplePage />
          </ProtectedRoute>
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
