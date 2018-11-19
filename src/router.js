import React from 'react'
import { Router, Route, IndexRedirect } from 'dva/router'
import Layouts from './routes/Layouts'
import Products from './routes/Products'

export default ({ history }) => {
  return (
    <Router history={history}>
      <Route path="/" component={Layouts}>
        <IndexRedirect to="/products" />
        <Route path="/products" component={Products}/>
      </Route>
    </Router>
  )
}
