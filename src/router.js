import React from 'react'
import { Router, Route } from 'dva/router'
import Layouts from './routes/Layouts'
import Products from './routes/Products'

export default ({ history }) => {
  return (
    <Router history={history}>
      <Layouts>
        <switch>
          <Route exact path="/" component={Products}>
          </Route>
          <Route path="/products" component={Products}>
          </Route>
          <Route path="/products/222" component={Products}>
          </Route>
          <Route component={null}></Route>
        </switch>
      </Layouts>
    </Router>
  )
}
