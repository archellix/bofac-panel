import * as React from 'react'
import { useCallback } from 'react'
import { Redirect, useLocation } from 'react-router-dom'

import { useKeycloak } from '@react-keycloak/web'

const LoginPage = () => {
  const location = useLocation()
  const currentLocationState = location.state || {
    from: { pathname: '/factory' },
  }

  const { keycloak } = useKeycloak()

  const login = useCallback(() => {
    keycloak.login()
  }, [keycloak])

  if (keycloak.authenticated)
    return <Redirect to={currentLocationState.from} />

  return (
    <div>
      <button type="button" onClick={login}>
        Login
      </button>
    </div>
  )
}

export default LoginPage