/**
 * Dependencies
 */

import React, { Suspense, lazy } from 'react'
import { Route, Redirect } from 'react-router-dom'

/**
 * Lazy load dependencies
 */

const { Signin, Signup } = lazy(() => require('../views/index'))

/**
 * Define component
 */

function UsersRouter({ mount }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Route path={`${mount}/signin`} component={Signin} />
      <Route path={`${mount}/signup`} component={Signup} />
    </Suspense>
  )
}

/**
 * Define component
 */

export default UsersRouter