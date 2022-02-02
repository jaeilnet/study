import React from "react"
import { ErrorBoundary } from "react-error-boundary"
import { BrowserRouter, Route, Switch } from "react-router-dom"
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
      <BrowserRouter>
        <Switch>
          <Route exact path="/edit/:id" component={Edit} />
          <Route exact path="/book/:id" component={Detail} />
          <Route exact path="/add" component={Add} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/*" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  )
}

export default App
