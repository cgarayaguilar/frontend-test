import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = React.lazy(() => import('pages/Home'))

export default function AppRoutes() {
  return (
    <Suspense fallback={'Cargando...'}>
      <Switch>
        <Route exact path="/" component={Home}></Route>

        <Route component={() => <h1>404 ERROR</h1>} />
      </Switch>
    </Suspense>
  )
}
