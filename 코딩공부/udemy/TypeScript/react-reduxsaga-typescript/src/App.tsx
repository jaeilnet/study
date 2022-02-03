import React from "react"
import { ConnectedRouter } from "connected-react-router"
import { ErrorBoundary } from "react-error-boundary"
import { Route, Switch } from "react-router-dom"
import history from "./history"
import Add from "./page/Add"
import Detail from "./page/Detail"
import Edit from "./page/Edit"
import Error from "./page/Error"
import Home from "./page/Home"
import NotFound from "./page/NotFound"
import Signin from "./page/Signin"

function App() {
  return (
    <ErrorBoundary FallbackComponent={Error}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/book/:id" component={Detail} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/*" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </ConnectedRouter>
    </ErrorBoundary>
  )
}

export default App
