import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { HOME, DASHBOARD } from 'config/paths'
import PageLoader from 'loaders/PageLoader'

const Home = lazy(() => import('pages/Home'))
const Dashboard = lazy(() => import('pages/Dashboard'))

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path={DASHBOARD} component={Dashboard}></Route>
        <Route exact path={HOME} component={Home}></Route>
        <Route component={() => <h1>404 ERROR</h1>} />
      </Switch>
    </Suspense>
  )
}
