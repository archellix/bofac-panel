import * as React from 'react'
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

import { FactoryPage } from '../containers/Factory'
import LoginPage from '../containers/Login'

import PrivateRoute from '../components/PrivateRoute'

export const AppRouter = () => {
  const { initialized } = useKeycloak()

  if (!initialized) {
    return <div>Loading...</div>
  }

  return (
    <Router>
      <Redirect from="/" to="/factory" />
      <PrivateRoute path="/factory" component={FactoryPage} />
      <Route path="/login" component={LoginPage} />
    </Router>
  )
}