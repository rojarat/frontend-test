import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Test1 = lazy(() => import("./index"));
const Test2 = lazy(() => import("./Test2"));
const Test3 = lazy(() => import("./Test3"));
export function RouterMain() {
  return (
    <Router>
      <Suspense fallback={<div>Loading..</div>}>
        <Switch>
          <Route exact path='/' component={Test1} />
          <Route path='/2' component={Test2} />
          <Route path='/3' component={Test3} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default RouterMain;
