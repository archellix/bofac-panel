import Keycloak from 'keycloak-js';

// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
const keycloak = Keycloak({
  url: 'http://localhost:9090/auth',
  realm: 'BoFac',
  clientId: 'bofac',
});

export default keycloak;