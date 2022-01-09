import "./App.css"
import { ErrorBoundary } from "react-error-boundary"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Detail from "./pages/Detail"
import Add from "./pages/Add"
import Edit from "./pages/Edit"
import NotFound from "./pages/NotFound"
import Error from "./pages/Error"
import { ConnectedRouter } from "connected-react-router"
import history from "./history"
import { Route, Switch } from "react-router-dom"

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/book/:id" component={Detail} />
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  )
}

export default App
