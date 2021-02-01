import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
// import NotFound404 from "./NotFound404";

function App() {
  return (
    <Router>
      <Container className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">{/* <NotFound404 /> */}</Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
